import { setCounty } from '../Actions/CountyActions';
import YearIncome from './YearIncome';

const tokenParam = '&$$app_token=' + process.env.REACT_APP_COINCOME_TOKEN;

export const GetCountyData = (county, dispatch) => {
  let params = '?inctype=2&$order=periodyear&areaname=' + county + ' County' + tokenParam;
  global.axiosInstance.get(params)
    .then((res) => {
      const countyData = res.data.map((data) => {
        return new YearIncome(data);
      });

      dispatch(setCounty(county, countyData));
    })
    .catch((res) => {
      // TODO: handle failure
      /* eslint-disable no-console */
      console.log('GetCountyData failed\n', res);
      /* eslint-enable no-console */
    });
};
