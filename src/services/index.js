import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVICE_URL;

const service = axios.create({ baseURL });

const CustomAxios = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = axios.create({ baseURL: '/api' });
    }
    return this._instance;
  }
};

service.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);

service.interceptors.request.use((config) => config);

export { service };
export default CustomAxios.instance;
