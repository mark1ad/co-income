export const CreateDataset = (label, color, years, getData) => {
  let dataset = {
    fill: false,
    spanGaps: true,
    lineTension: 0,
    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
    pointHoverBorderWidth: 2,
    backgroundColor: color,
    borderColor: color,
    label: label,
    data: []
  };
  dataset.data = years.map( getData);
  return dataset;
};
