'use client'
import api from "@/app/apiClient/axiosInstance";
import { redirect } from 'next/navigation'
import { setCookie } from 'cookies-next';

export default async function login({ email, password }) {
  const response = await api.post(
    "auth/login",
      {
        email: 'challenge2025@arbolitics.com',
        password: 'challenge2025'
      }
  );


  setCookie('loggedIn', true)
  redirect(`/data/`)

  return response.data;
};