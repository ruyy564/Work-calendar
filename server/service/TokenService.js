const jwt = require('jsonwebtoken');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30d',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

      return userData;
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService();
