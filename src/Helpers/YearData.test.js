import YearData from './YearData';
import { PER_CAPITA_INCOME } from './YearIncome';

let year;
let perCapitaIncome = {
  areaname: 'Adams',
  periodyear: '2016',
  inctype: PER_CAPITA_INCOME,
  income: '1234'
};

beforeEach(() => {
  year = new YearData('2016');
});

it('new Year', () => {
  expect(year).toBeDefined();
});

it('valid year from constructor', () => {
  expect(year.year).toEqual('2016');
});

it('empty incomes list from constructor', () => {
  expect(year.incomes.length).toEqual(0);
});

it('add new county income', () => {
  year.setIncome(perCapitaIncome);
  expect(year.incomes.length).toEqual(1);
});

it('update county income', () => {
  year.setIncome(perCapitaIncome);
  year.setIncome(perCapitaIncome);
  expect(year.incomes.length).toEqual(1);
});
