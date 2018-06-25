export const TOTAL_PERSONAL_INCOME = '1';
export const PER_CAPITA_INCOME = '2';
export const MEDIAN_HOUSEHOLD_INCOME = '3';

class YearIncome {
  constructor(data) {
    this.year = parseInt(data.periodyear, 10);
    // Chart.js will not display values set to NaN
    this.perCapita = NaN;
    this.medianHousehold = NaN;
    this.totalPersonalIncome = NaN;
    this.update(data);
  }

  update(data) {
    if (data.inctype === PER_CAPITA_INCOME) {
      // A value of 0 means no data. Leave as NaN
      if (data.income !== '0') {
        this.perCapita = parseInt(data.income, 10);
      }
    } else if (data.inctype === MEDIAN_HOUSEHOLD_INCOME) {
      this.medianHousehold = parseInt(data.income, 10);
    } else if (data.inctype === TOTAL_PERSONAL_INCOME) {
      this.totalPersonalIncome = parseInt(data.income, 10);
    }

    this[data.inctype] = data.income === 0 ? NaN : parseInt(data.income, 10);
  }
}

export default YearIncome;
