export const PER_CAPITA_INCOME = '2';
export const MEDIAN_HOUSEHOLD_INCOME = '3';

class YearIncome {
  constructor(data) {
    this.year = parseInt(data.periodyear, 10);
    this.perCapita = 0;
    this.medianHousehold = 0;
    this.update(data);
  }

  update(data) {
    if (data.inctype === PER_CAPITA_INCOME) {
      this.perCapita = parseInt(data.income, 10);
    } else if (data.inctype === MEDIAN_HOUSEHOLD_INCOME) {
      this.medianHousehold = parseInt(data.income, 10);
    }
  }
}

export default YearIncome;
