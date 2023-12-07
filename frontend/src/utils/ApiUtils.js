import axios from 'axios';
import { BASE_URL} from '../api/Api';

const api = axios.create({
  baseURL: BASE_URL,
});

const get = async (url) => {
  try {
    const response = await api.get(url);
    return response;
  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
};

const post = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
};

const put = async (url, data) => {
  try {
    const response = await api.put(url, data);
    return response;
  } catch (error) {
    console.error('Error during PUT request:', error);
    throw error;
  }
};

const remove = async (url) => {
  try {
    const response = await api.delete(url);
    return response;
  } catch (error) {
    console.error('Error during DELETE request:', error);
    throw error;
  }
};

export {get, post, put, remove};