// Values are from the colorado api
export const TOTAL_PERSONAL_TYPE = '1';
export const PER_CAPITA_TYPE = '2';
export const MEDIAN_HOUSEHOLD_TYPE = '3';
export const dataTypeInfo = {
  [TOTAL_PERSONAL_TYPE]: { label: 'Total Personal Income', displayed: false},
  [PER_CAPITA_TYPE]: { label: 'Per-Capita', displayed: false },
  [MEDIAN_HOUSEHOLD_TYPE]: { label: 'Median Household', displayed: false }
};
