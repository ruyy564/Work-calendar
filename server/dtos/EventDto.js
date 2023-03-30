class EventDto {
  constructor(model) {
    this.id = model.id;
    this.date = model.date;
    this.UserId = model.UserId;
    this.timebased = model.timebased;
    this.pieceworks = model.pieceworks;
  }
}

module.exports = EventDto;
