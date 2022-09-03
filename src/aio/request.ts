import axios from 'axios';

import axiosRequestConfig from '../config/request';

const request = axios.create(axiosRequestConfig);

export default request;
