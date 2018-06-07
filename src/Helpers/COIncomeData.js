import { setCounty } from '../Actions/CountyActions';

export const GetCountyData = (county, dispatch) => {
  let params = '?inctype=2&$order=periodyear&areaname=' + county + ' County';
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
