import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.apikey}&ts=1&hash=${process.env.hash}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instanceAxios;
