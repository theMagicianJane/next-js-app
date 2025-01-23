import { getData, getPeriodData, formatDate, getDeviceData } from "./utils/utils";


export const getOptions = (mode, chartValue, dates, startDate) => {
  const newDates = dates.map(({ TMS, ...date }) => ({ ...date, TMS: formatDate(TMS) }))
  const DID_25_225 = getDeviceData(newDates,"25_225")
  const DID_25_226 = getDeviceData(newDates,"25_226")

  return {
    title: {
      text: chartValue ==='hum1' ? 'Humidity' : 'Temperature'
    },
    xAxis: {
      type: 'category',
      data: getData(startDate, mode, DID_25_225)
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['DID_25_225', 'DID_25_226']
    },
    series: [
      {
        name: 'DID_25_225',
        data: getPeriodData(DID_25_225, chartValue, mode, startDate),
        type: 'line',
        stack: 'Total'
      },
      {
        name: 'DID_25_226',
        data: getPeriodData(DID_25_226, chartValue, mode, startDate),
        type: 'line',
        stack: 'Total'
      }
    ]
  };
}