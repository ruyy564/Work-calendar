class TimebasedDto {
  constructor(model) {
    this.EventId = model.EventId;
    this.costInHour = model.costInHour;
    this.mainWorkTime = model.mainWorkTime;
    this.overTime = model.overTime;
    this.firstTwoHourRatio = model.firstTwoHourRatio;
    this.otherHoursRatio = model.otherHoursRatio;
  }
}

module.exports = TimebasedDto;
