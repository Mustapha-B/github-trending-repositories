import axios from 'axios';

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  get(resource, params) {
    return axios.get(resource, {
      params,
    });
  },
};

export default ApiService;
