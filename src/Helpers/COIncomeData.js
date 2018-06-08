import { setCounty } from '../Actions/CountyActions';

const tokenParam = '&$$app_token=' + process.env.REACT_APP_COINCOME_TOKEN;

export const GetCountyData = (county, dispatch) => {
  let params = '?inctype=2&$order=periodyear&areaname=' + county + ' County' + tokenParam;
  global.axiosInstance.get(params)
    .then((res) => {
      const countyData = res.data;
      dispatch(setCounty(county, countyData));
    })
    .catch((res) => {
      // TODO: handle failure
      /* eslint-disable no-console */
      console.log('GetCountyData failed\n', res);
      /* eslint-enable no-console */
    });
};
