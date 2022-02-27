import axios from "axios";

const api = axios.create({
  baseURL: "http://51.195.53.26:3000/",
  headers: {
    "Content-Type": "application/json",
    
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("err ", err);
  }
);
export default api;
