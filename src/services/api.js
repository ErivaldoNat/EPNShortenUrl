import axios from 'axios';

export const key = "4e218eb4cb3227e7519d2767424e9bb6ac1fbf82";

const api = axios.create({
  baseURL:'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api;
