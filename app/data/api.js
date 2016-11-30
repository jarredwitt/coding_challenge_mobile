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
  create: (application, members, vehicles) => buildRequest('applications', {}, { application, members, vehicles }, 'post'),
  update: (id, application, members, vehicles) => buildRequest(`applications/${id}`, {}, { application, members, vehicles }, 'post'),
};

const PhoneNumber = {
  confirm: (phoneNumber, confirmationCode) => buildRequest('phonenumbers/confirm', {}, { phoneNumber, confirmationCode }, 'post'),
  validate: phoneNumber => buildRequest('phonenumbers/validate', {}, { phoneNumber }, 'post'),
};

module.exports = {
  Application,
  PhoneNumber,
};
