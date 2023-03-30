const bcrypt = require('bcrypt');
const uuid = require('uuid');

const { User, AccessLink } = require('../models');
const UserDto = require('../dtos/UserDto');
const ApiError = require('../error/ApiError');
const mailService = require('./MailService');
const tokenService = require('./TokenService');
const deleteInactivatedUserAfterTime = require('../helpers/deleteInactivatedUserAfterTime');

class UserService {
  async registrarion(email, password) {
    const person = await User.findOne({ where: { email } });

    if (person) {
      throw ApiError.badRequest('Пользователь уже существует');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ email, password: hashPassword });
    const accessLink = await AccessLink.create({ UserId: user.id });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/auth/activate/${accessLink.activationLink}`
    );
    const userDto = new UserDto(user);

    //удаление неактивированного аккаунта через 2 часа, после регистрации
    deleteInactivatedUserAfterTime(email, 1000 * 60 * 60 * 2);

    return {
      user: userDto,
    };
  }

  async login(email, password) {
    const person = await User.findOne({ where: { email } });

    if (!person) {
      throw ApiError.badRequest('Некорректные данные');
    }
    const comparePassword = await bcrypt.compareSync(password, person.password);

    if (!comparePassword) {
      throw ApiError.badRequest('Некорректные данные');
    }
    if (!person.isActivated) {
      const accessLink = await AccessLink.findOne({
        where: { UserId: person.id },
      });

      throw ApiError.badRequest('Email не подтвержден, проверьте почту!', {
        sendActivationEmail: `${process.env.API_URL}/api/auth/send-activation-email/${accessLink.sendingLink}`,
      });
    }
    const userDto = new UserDto(person);
    const tokens = tokenService.generateTokens({ ...userDto });

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(link) {
    const accessLink = await AccessLink.findOne({
      where: { activationLink: link },
    });

    if (!accessLink) {
      throw ApiError.badRequest('Некорректные данные');
    }
    const person = await User.findOne({ where: { id: accessLink.UserId } });

    if (!person || person.isActivated) {
      throw ApiError.badRequest('Некорректные данные');
    }
    person.isActivated = true;
    await person.save();
  }

  async sendActivationEmail(link) {
    const accessLink = await AccessLink.findOne({
      where: { sendingLink: link },
    });

    if (!accessLink) {
      throw ApiError.badRequest('Некорректные данные');
    }
    const person = await User.findOne({
      where: { id: accessLink.UserId },
    });

    if (!person) {
      throw ApiError.badRequest('Некорректные данные');
    }
    const activationLink = uuid.v4();
    accessLink.activationLink = activationLink;

    await accessLink.save();
    await mailService.sendActivationMail(
      person.email,
      `${process.env.API_URL}/api/auth/activate/${activationLink}`
    );
  }
}

module.exports = new UserService();
