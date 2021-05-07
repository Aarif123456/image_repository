import axios, { AxiosInstance } from 'axios';

export const API = 'https://arif115.myweb.cs.uwindsor.ca/imagerepository/api/';

export const AXIOS_ENDPOINT: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: API
});
