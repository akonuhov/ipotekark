import axios from 'axios'
import config from '@/config.json'

export const HTTP = axios.create({
  baseURL: config.host + ':' + config.port,
  headers: {
    'Content-Type': 'application/json'
  }
})
