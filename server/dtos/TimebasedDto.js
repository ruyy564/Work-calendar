class TimebasedDto {
  constructor(models) {
    this.EventId = models.EventId;
    this.costInHour = models.costInHour;
    this.mainWorkTime = models.mainWorkTime;
    this.overTime = models.overTime;
    this.firstTwoHourRatio = models.firstTwoHourRatio;
    this.otherHoursRatio = models.otherHoursRatio;
  }
}

module.exports = TimebasedDto;
