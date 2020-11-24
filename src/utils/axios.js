import axios from "axios";

const DOMAIN = "http://192.168.0.156:5000";
axios.defaults.withCredentials = false;
export const request = (method, url, headers, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers: headers,
    data,
  })
    .then((res) => res.data)
};