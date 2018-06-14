import { setCounty } from '../Actions/CountyActions';
import County from './County';

const tokenParam = '&$$app_token=' + process.env.REACT_APP_COINCOME_TOKEN;

export const GetCountyData = (county, dispatch) => {
  let params = '?$order=periodyear&areaname=' + county + ' County' + tokenParam;
  global.axiosInstance.get(params)
    .then((res) => {
      let countyData = new County(county);
      res.data.forEach((year) => {
        countyData.setIncome(year);
      });
      countyData.removeLeadingWithoutData();

      dispatch(setCounty(countyData));
    })
    .catch((res) => {
      // TODO: handle failure
      /* eslint-disable no-console */
      console.log('GetCountyData failed\n', res);
      /* eslint-enable no-console */
    });
};
