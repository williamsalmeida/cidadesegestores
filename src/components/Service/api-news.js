import axios from 'axios';

const api_news = axios.create({
  baseURL: 'https://amainforma.com.br/api/v1'
})

export default api_news;

