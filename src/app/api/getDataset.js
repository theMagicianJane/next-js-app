'use client'
import api from '../apiClient/axiosInstance'


export default async function getDataset() {
  const raw = {
    location_id: 10,
    limit: 500
  };

  const response = await api.post('/data/getArboliticsDatasetPost',
    { ...raw })

  return response.data;
};