class UserDto {
  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.isActive = model.isActive;
  }
}

module.exports = UserDto;
