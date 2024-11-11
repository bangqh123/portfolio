import axios from 'axios';

const url_api = "../../js/data.js"

const api = axios.create({
    baseURL: url_api,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
});

export default api