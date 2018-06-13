import YearIncome from './YearIncome';

class County {
  constructor(name) {
    this.name = name;
    this.years = [];
  }

  setIncome(data) {
    let year = parseInt(data.periodyear, 10);
    let record = this.years.find((d) => {
      return (d.year === year);
    });
    if (record === undefined) {
      this.years.push(new YearIncome(data));
    } else {
      record.update(data);
    }
  }
}

export default County;
