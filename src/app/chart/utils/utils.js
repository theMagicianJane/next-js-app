import moment from "moment/moment";


const FORMAT = 'YYYY-MM-DD';
const WEEK = 'week';
const MONTH = 'month';
export const dayHours = ["00:00:00", "01:00:00", "02:00:00", "03:00:00", "04:00:00", "05:00:00", "06:00:00", "07:00:00", "08:00:00", "09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00", "19:00:00", "20:00:00", "21:00:00", "22:00:00", "23:00:00"]
export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', "Fri", "Sat", "Sun"];

export const formatDate = timestamp => moment(timestamp * 1000).format(FORMAT)

export const getMonthDates = (startDate, data) => {
  const selectedDay = moment(startDate)
  const fromDate = selectedDay.startOf('month').format(FORMAT);
  const toDate = selectedDay.endOf('month').format(FORMAT);

  const period = data
    .filter(date => moment(moment(date?.TMS).format(FORMAT)).isBetween(fromDate, toDate, null, '[]'))
    .map(data => data?.TMS)
    .reverse();
  return [...new Set(period)]
}

export const getData = (startDate, mode, data) => ({
  daily: dayHours,
  weekly: weekDays,
  monthly: getMonthDates(startDate, data)
}[mode]);

export const getDailyChartData = (data, prop, startDate) => {
  return data.filter(date => date.TMS === moment(startDate).format(FORMAT))
    .reverse()
    .map(data => data[prop])
}

export const getPeriodChartData = (data, prop, mode, startDate) => {
  const period = mode === 'weekly' ? WEEK : MONTH;
  const selectedDay = moment(startDate)
  const fromDate = selectedDay.startOf(period).format();
  const toDate = selectedDay.endOf(period).format(FORMAT);

  const periodData = data.filter(date => moment(moment(date?.TMS).format(FORMAT)).isBetween(fromDate, toDate, null, '[]'));
  const periodDataInChunks = periodData.reverse().reduce((acc, _, i) => (i % 24) ? acc : [...acc, periodData.slice(i, i + 24)], [])

  return periodDataInChunks.map(dayData => dayData.reduce((sum, value) => sum + value[prop], 0) / dayData.length);
}

export const getPeriodData = (data, chartValue, mode, startDate) => ({
  daily: getDailyChartData(data, chartValue, startDate),
  weekly: getPeriodChartData(data, chartValue, mode, startDate),
  monthly: getPeriodChartData(data, chartValue, mode, startDate)
}[mode]);

export const getDeviceData = (data, device) => data.filter(date => date.DID === device)



