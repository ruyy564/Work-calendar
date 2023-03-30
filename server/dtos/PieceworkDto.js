class PieceworkDto {
  constructor(model) {
    this.id = model.id;
    this.cost = model.cost;
    this.name = model.name;
    this.count = model.count;
    this.EventId = model.EventId;
  }
}

module.exports = PieceworkDto;
