import YearIncome from './YearIncome';

let yearIncome;

beforeEach(() => {
  yearIncome = new YearIncome({periodyear: '1970', income: '1234'});
});

it('new YearIncome', () => {
  expect(yearIncome).toBeDefined();
});

it('valid year from constructor', () => {
  expect(yearIncome.year).toEqual(1970);
});

it('valid income from constructor', () => {
  expect(yearIncome.income).toEqual(1234);
});
