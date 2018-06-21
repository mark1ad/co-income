import YearIncome,
{
  TOTAL_PERSONAL_INCOME,
  PER_CAPITA_INCOME,
  MEDIAN_HOUSEHOLD_INCOME
} from './YearIncome';

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

describe('per-capita', () => {
  it('valid default perCapita from constructor', () => {
    let record = new YearIncome({periodyear: '1979'});
    expect(record.perCapita).toEqual(NaN);
  });

  it('valid perCapita from constructor', () => {
    expect(yearIncome.perCapita).toEqual(1234);
  });

  it('update perCapita', () => {
    yearIncome.update({periodyear: '1970', income: '2345', inctype: PER_CAPITA_INCOME});
    expect(yearIncome.perCapita).toEqual(2345);
  });
});

describe('medianHousehold', () => {
  it('valid default medianHousehold from constructor', () => {
    expect(yearIncome.medianHousehold).toEqual(NaN);
  });

  it('valid medianHousehold from constructor', () => {
    let record = new YearIncome({periodyear: '1970', income: '4321', inctype: MEDIAN_HOUSEHOLD_INCOME});
    expect(record.medianHousehold).toEqual(4321);
  });

  it('update medianHousehold', () => {
    yearIncome.update({periodyear: '1970', income: '6543', inctype: MEDIAN_HOUSEHOLD_INCOME});
    expect(yearIncome.medianHousehold).toEqual(6543);
  });
});

describe('totalPersonalIncome', () => {
  it('valid default totalPersonalIncome', () => {
    expect(yearIncome.totalPersonalIncome).toEqual(NaN);
  });

  it('valid totalPersonalIncome from constructor', () => {
    let record = new YearIncome({
      periodyear: '1970',
      income: '100001',
      inctype: TOTAL_PERSONAL_INCOME
    });
    expect(record.totalPersonalIncome).toEqual(100001);
  });

  it('update totalPersonalIncome', () => {
    yearIncome.update({
      periodyear: '1970',
      inctype: TOTAL_PERSONAL_INCOME,
      income: '100001'
    });
    expect(yearIncome.totalPersonalIncome).toEqual(100001);
  });
});
