import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters`,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: process.env.apikey,
    hash: process.env.hash,
    ts: 1,
    limit: 100,
  },
});

export default instanceAxios;
