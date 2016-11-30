import axios from 'axios';

const baseURL = 'http://localhost:8000/';

const transformResponse = (data) => {
  if (data.length) {
    return JSON.parse(data);
  }

  return data;
};

const buildRequest = (url, params, data, method = 'get') => axios({
  method,
  baseURL,
  url,
  params,
  data,
  transformResponse,
});

const Application = {
  create: (application, members, vehicles) => buildRequest('application/', {}, { application, members, vehicles }, 'post'),
  update: (id, application, members, vehicles) => buildRequest(`application/${id}`, {}, { application, members, vehicles }, 'post'),
};

module.exports = {
  Application,
};
