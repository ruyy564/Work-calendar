const nodemailer = require('nodemailer');
const getEmailMessage = require('../helpers/getEmailMessage');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      secure: false,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: `Рабочий календарь <${process.env.SMPT_USER}>`,
      to,
      subject: `Подтверждение вашего адреса электронной почты`,
      text: '',
      html: getEmailMessage(link, to),
    });
  }
}

module.exports = new MailService();
