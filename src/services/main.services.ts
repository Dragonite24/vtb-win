import axios from 'api/http-common'

const createApplication = async <T>(data: T, endpoint: string) => {
  const response = await axios.post<T>(`/${endpoint}/`, data)
  return response
}

const HttpService = {
  createApplication
}

export default HttpService
