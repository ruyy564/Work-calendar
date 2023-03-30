const { User } = require('../models');

function deleteInactivatedUserAfterTime(email, time) {
  setTimeout(async () => {
    const user = await User.findOne({ where: { email } });

    if (!user.isActivated) {
      await user.destroy();
    }
  }, time);
}

module.exports = deleteInactivatedUserAfterTime;
