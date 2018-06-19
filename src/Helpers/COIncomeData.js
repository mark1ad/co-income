import { setCounty } from '../Actions/CountyActions';
import { setYearData } from '../Actions/YearDataActions';
import County from './County';
import YearData from './YearData';

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

export const getYearData = (year, dispatch) => {
  let params = '?$order=areaname&periodyear=' + year + tokenParam;
  global.axiosInstance.get(params)
    .then((res) => {
      let yearData = new YearData(year);
      res.data.forEach((year) => {
        yearData.setIncome(year);
      });
      // yearData.removeLeadingWithoutData();

      dispatch(setYearData(yearData));
    })
    .catch((res) => {
      // TODO: handle failure
      /* eslint-disable no-console */
      console.log('GetCountyData failed\n', res);
      /* eslint-enable no-console */
    });
};
