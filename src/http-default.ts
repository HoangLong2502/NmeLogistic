import axios from 'axios';

const token = localStorage.getItem('user')

export const HTTP = axios.create({
  baseURL: `https://logistic.nmeco.xyz`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token '+ token
  }  
})
