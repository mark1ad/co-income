class YearIncome {
  constructor(data) {
    this.year = parseInt(data.periodyear, 10);
    this.income = parseInt(data.income, 10);
  }
}

export default YearIncome;
