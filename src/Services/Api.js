import apisauce from 'apisauce';
import ApiConfig from '../Config/ApiConfig';

const API = (baseURL = ApiConfig.baseURL) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    // 15 second timeout...
    timeout: 15000
  });

  const login = ({userName, password}) => {
    return api.post('logindash', {userName, password}, {
      headers: { 'Content-Type': 'application/json' }
    });
  };

  return {
    login
  }
}

export default API;
