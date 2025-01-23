'use client'
import api from "../apiClient/axiosInstance";
import { redirect } from 'next/navigation'
import { setCookie } from 'cookies-next';

export default async function login({ email, password }) {
  try {
    const response = await api.post(
      "auth/login",
      {
        email,
        password
      }
    );
    const { accessToken } = response?.data?.data

    setCookie('token', accessToken);
  } catch (e) {
    console.log(e)
  }
  redirect(`/chart`);
};