import axios from "axios";

export const evoUrl = axios.create({
  baseURL: import.meta.env.VITE_EVO_BASE_URL,
  auth:{
    username:import.meta.env.VITE_EVO_USERNAME ?? '',
    password:import.meta.env.VITE_EVO_PASSWORD ?? ''
  }
});