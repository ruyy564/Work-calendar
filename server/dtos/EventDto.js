class EventDto {
  constructor(models) {
    this.id = models.id;
    this.date = models.date;
    this.UserId = models.UserId;
    this.timebased = models.timebased;
    this.pieceworks = models.pieceworks;
  }
}

module.exports = EventDto;
