import { setCounty } from '../Actions/CountyActions';
import YearIncome from './YearIncome';

const tokenParam = '&$$app_token=' + process.env.REACT_APP_COINCOME_TOKEN;

export const GetCountyData = (county, dispatch) => {
  let params = '?$order=periodyear&areaname=' + county + ' County' + tokenParam;
  global.axiosInstance.get(params)
    .then((res) => {
      let countyData = [];
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].inctype === '2') {
          countyData.push(new YearIncome(res.data[i]));
        }
      }

      dispatch(setCounty(county, countyData));
    })
    .catch((res) => {
      // TODO: handle failure
      /* eslint-disable no-console */
      console.log('GetCountyData failed\n', res);
      /* eslint-enable no-console */
    });
};
