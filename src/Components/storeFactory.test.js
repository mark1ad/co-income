import storeFactory from './storeFactory';
import { setCounties } from '../Actions/CountiesActions';
import { setCounty } from '../Actions/CountyActions';
import { setYearData } from '../Actions/YearDataActions';
import { addDataToDisplay } from '../Actions/DataToDisplayActions';
import { PER_CAPITA_TYPE } from '../Helpers/DataTypes.js';

let store;

beforeEach(() => {
  store = storeFactory();
});


//*******************************
// Test Counties
describe('store counties', () => {
  const counties = [ 'Adams', 'Alamosa' ];

  it('should set list of counties', () => {
    store.dispatch(setCounties(counties));
    expect(store.getState().Counties.length).toBe(2);
    expect(store.getState().Counties).toEqual(counties);
  });

});

// *************************

it('should set county', () => {
  store.dispatch(setCounty({name: 'Adams'}));
  expect(store.getState().County.name).toEqual('Adams');
});

it('should set year data', () => {
  store.dispatch(setYearData({year: '2016'}));
  expect(store.getState().YearData.year).toEqual('2016');
});

it('should add data to display', () => {
  store.dispatch(addDataToDisplay(PER_CAPITA_TYPE));
  expect(store.getState().DataToDisplay).toBeDefined();
});
