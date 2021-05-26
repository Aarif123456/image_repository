import axios, { AxiosInstance } from 'axios';

function getAPI() {
    switch (process.env.NODE_ENV) {
        case 'development':
            return 'http://localhost:4000';
        case 'test':
            return 'http://localhost:4000';
        case 'production':
            return 'https://arif115.myweb.cs.uwindsor.ca/imagerepository/api/';
    }
}
export const API = getAPI();

export const AXIOS_ENDPOINT: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: API
});
