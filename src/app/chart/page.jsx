'use client'
import { useState } from 'react';
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import ReactECharts from 'echarts-for-react';
import "react-datepicker/dist/react-datepicker.css";
import getDataset from '../api/getDataset';
import { Select, Option } from "@material-tailwind/react";
import { getOptions } from "./options";
import { formatDate, getPeriodData, getDeviceData } from "./utils/utils";


export default function Chart () {
  const [startDate, setStartDate] = useState(new Date('2024-12-29'));
  const [chartValue, setChartValue] = useState('hum1');
  const [mode, setMode] = useState('daily');
  const placeholder = 'There is no data to show';
  const { data } = useQuery("data", getDataset);
  const { data: dates = [] } = data || [];

  const newDates = dates.map(({ TMS, ...date }) => ({ ...date, TMS: formatDate(TMS) }))
  const DID_25_225 = getDeviceData(newDates,"25_225")

  return (
    <>
      <div className="flex justify-center m-10 grid-cols-2 gap-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat='yyyy-MM-dd'
          inline
        />
        <div className='flex grid-cols-2 gap-4'>
          <Select value={chartValue} label="Select device" onChange={setChartValue}>
            <Option value='hum1'>Humidity</Option>
            <Option value='tem1'>Temperature</Option>
          </Select>
          <Select value={mode} label="Select interval" onChange={setMode}>
            <Option selected value='daily'>Daily</Option>
            <Option value='weekly'>Weekly</Option>
            <Option value='monthly'>Monthly</Option>
          </Select>
        </div>

      </div>
      {!getPeriodData(DID_25_225, chartValue, mode, startDate).length ?
        (<div className='text-center m-100'>{placeholder}</div>) : (
        <div className='mt-30'>
          <ReactECharts option={getOptions(mode, chartValue, dates, startDate)} />
        </div>
      )}
    </>
  );
}



