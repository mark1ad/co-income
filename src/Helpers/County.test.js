import County from './County';
import { PER_CAPITA_INCOME } from './YearIncome';

let county;
let perCapitaIncome = {
  periodyear: '1970',
  inctype: PER_CAPITA_INCOME,
  income: '1234'
};

beforeEach(() => {
  county = new County('Adams');
});

it('new County', () => {
  expect(county).toBeDefined();
});

it('valid name from constructor', () => {
  expect(county.name).toEqual('Adams');
});

it('empty incomes list from constructor', () => {
  expect(county.years.length).toEqual(0);
});

it('add new income', () => {
  county.setIncome(perCapitaIncome);
  expect(county.years.length).toEqual(1);
  expect(county.years[0].perCapita).toEqual(1234);
});

it('update income', () => {
  county.setIncome(perCapitaIncome);
  county.setIncome({periodyear: '1970', inctype: PER_CAPITA_INCOME, income: '4321'});
  expect(county.years.length).toEqual(1);
  expect(county.years[0].perCapita).toEqual(4321);
});
