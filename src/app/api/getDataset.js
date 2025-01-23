'use client'
import api from "@/app/apiClient/axiosInstance";
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'


export default async function getDataset() {
  const raw = {
    "location_id": 10,
    "limit": 1
  };

  const requestOptions = {
    headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI5LCJlbWFpbCI6ImNoYWxsZW5nZTIwMjVAYXJib2xpdGljcy5jb20iLCJyb2xlIjoiVEVTVCIsImlhdCI6MTczNzMyMjEwNCwiZXhwIjoxNzM3OTI2OTA0fQ.u6JyQ3Ohd-aNL_PNfcJaXW3WRgh0rcMPjpgZrCjgeh0'
    },
    body: raw
  };


  const response = await api.get(`https://staging-api.arbolitics.com/data/getArboliticsDataset`, requestOptions)
  console.log(response)
  return response.data;
};