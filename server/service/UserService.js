const bcrypt = require('bcrypt');

const { User } = require('../models');
const UserDto = require('../dtos/UserDto');
const tokenService = require('./TokenService');
const ApiError = require('../error/ApiError');

class UserService {
  async registrarion(email, password) {
    const person = await User.findOne({ where: { email } });

    if (person) {
      throw ApiError.badRequest('Пользователь уже существует');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ email, password: hashPassword });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    return {
      ...tokens,
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
    const userDto = new UserDto(person);
    const tokens = tokenService.generateTokens({ ...userDto });

    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
