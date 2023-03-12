class PieceworkDto {
  constructor(models) {
    this.id = models.id;
    this.cost = models.cost;
    this.name = models.name;
    this.count = models.count;
    this.EventId = models.EventId;
  }
}

module.exports = PieceworkDto;
