import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    timeout: 20000
  }
})
