import YearIncome, { PER_CAPITA_INCOME, MEDIAN_HOUSEHOLD_INCOME } from './YearIncome';

let yearIncome;

beforeEach(() => {
  yearIncome = new YearIncome({periodyear: '1970', income: '1234', inctype: PER_CAPITA_INCOME});
});

it('new YearIncome', () => {
  expect(yearIncome).toBeDefined();
});

it('valid year from constructor', () => {
  expect(yearIncome.year).toEqual(1970);
});

it('valid perCapita from constructor', () => {
  expect(yearIncome.perCapita).toEqual(1234);
});

it('valid default perCapita from constructor', () => {
  let record = new YearIncome({periodyear: '1970', income: '1234', inctype: '0'});
  expect(record.perCapita).toEqual(NaN);
});

it('valid default medianHousehold from constructor', () => {
  expect(yearIncome.medianHousehold).toEqual(NaN);
});

it('valid medianHousehold from constructor', () => {
  let record = new YearIncome({periodyear: '1970', income: '4321', inctype: MEDIAN_HOUSEHOLD_INCOME});
  expect(record.medianHousehold).toEqual(4321);
});

it('update perCapita', () => {
  yearIncome.update({periodyear: '1970', income: '2345', inctype: PER_CAPITA_INCOME});
  expect(yearIncome.perCapita).toEqual(2345);
});

it('update medianHousehold', () => {
  let record = new YearIncome({periodyear: '1970', income: '6543', inctype: MEDIAN_HOUSEHOLD_INCOME});
  expect(record.medianHousehold).toEqual(6543);
});
