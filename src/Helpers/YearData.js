import YearIncome from './YearIncome';

class YearData {
  constructor(year) {
    this.year = year;
    this.incomes = [];
  }

  setIncome(data) {
    let county = data.areaname;
    let income = this.incomes.find((d) => {
      return (d.county === county);
    });
    if (income === undefined) {
      this.incomes.push({
        county: county,
        income: new YearIncome(data)
      });
    } else {
      income.income.update(data);
    }
  }
}

export default YearData;
