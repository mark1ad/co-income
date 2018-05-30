import storeFactory from './storeFactory';
import { setCounties } from '../Actions/CountiesActions';

let store;

beforeEach(() => {
  store = storeFactory();
})


//*******************************
// Test Counties
describe("store counties", () => {
  const counties = [ 'Adams', 'Alamosa' ];

  it("should set list of counties", () => {
    store.dispatch(setCounties(counties));
    expect(store.getState().Counties.length).toBe(2);
    expect(store.getState().Counties).toEqual(counties);
  });
});
