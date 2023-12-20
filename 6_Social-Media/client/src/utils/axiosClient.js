// // Lec_1,2,3,4,5
// import axios from "axios";
// import {
//   KEY_ACCESS_TOKEN,
//   getItem,
//   removeItem,
//   setItem,
// } from "./localStorageManager";

// export const axiosClient = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_BASE_URL,
//   withCredentials: true,
// });

// // Interseptors.
// // Request Interseptors.
// axiosClient.interceptors.request.use((request) => {
//   const accessToken = getItem(KEY_ACCESS_TOKEN);
//   request.headers["Authorization"] = `Bearer ${accessToken}`;
//   return request;
// });

// // Response Interseptors.
// axiosClient.interceptors.response.use(async (response) => {
//   const data = response.data;
//   if (data.status === "ok") {
//     return data;
//   }
//   const originalRequest = response.config;
//   const statusCode = data.statusCode;
//   const error = data.error;

//   // When refresh token is expires, send user to login page.
//   if (
//     statusCode === 401 &&
//     originalRequest.url ===
//       `${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`
//   ) {
//     removeItem(KEY_ACCESS_TOKEN);
//     window.location.replace("/login", "_self");
//     return Promise.reject(error);
//   }
//   // Means access token has expired.
//   if (statusCode === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;

//     const response = await axios
//       .create({
//         withCredentials: true,
//       })
//       .get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`);

//     // console.log("response from backend ", response);

//     if (response.data.status === "ok") {
//       setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
//       originalRequest.headers[
//         "Authorization"
//       ] = `Bearer ${response.data.result.accessToken}`;

//       return axios(originalRequest);
//     }
//   }
//   return Promise.reject(error);
// });

// // Lec_6
// import axios from "axios";
// import {
//   KEY_ACCESS_TOKEN,
//   getItem,
//   removeItem,
//   setItem,
// } from "./localStorageManager";

// export const axiosClient = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_BASE_URL,
//   withCredentials: true,
// });

// // Interseptors.
// // Request Interseptors.
// axiosClient.interceptors.request.use((request) => {
//   const accessToken = getItem(KEY_ACCESS_TOKEN);
//   request.headers["Authorization"] = `Bearer ${accessToken}`;
//   return request;
// });

// // Response Interseptors.
// axiosClient.interceptors.response.use(async (response) => {
//   const data = response.data;
//   if (data.status === "ok") {
//     return data;
//   }
//   const originalRequest = response.config;
//   const statusCode = data.statusCode;
//   const error = data.error;

//   // Means access token has expired.
//   if (statusCode === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;

//     const response = await axios
//       .create({
//         withCredentials: true,
//       })
//       .get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`);

//     // console.log("response from backend ", response);

//     if (response.data.status === "ok") {
//       setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
//       originalRequest.headers[
//         "Authorization"
//       ] = `Bearer ${response.data.result.accessToken}`;

//       return axios(originalRequest);
//     } else {
//       removeItem(KEY_ACCESS_TOKEN);
//       window.location.replace("/login", "_self");
//       return Promise.reject(error);
//     }
//   }
//   return Promise.reject(error);
// });

// Lec_7
import axios from "axios";
import {
  KEY_ACCESS_TOKEN,
  getItem,
  removeItem,
  setItem,
} from "./localStorageManager";

import store from "../redux/store";
import { setLoading, showToast } from "../redux/slices/appConfigSlice";
import { TOAST_FAILURE } from "../App";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true,
});

// Interseptors.
// Request Interseptors.
axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = `Bearer ${accessToken}`;
  store.dispatch(setLoading(true));
  return request;
});

// Response Interseptors.
axiosClient.interceptors.response.use(
  async (response) => {
  store.dispatch(setLoading(false));

    const data = response.data;
    if (data.status === "ok") {
      return data;
    }
    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const error = data.message;

    store.dispatch(
      showToast({
        type: TOAST_FAILURE,
        message: error,
      })
    );

    // Means access token has expired.
    if (statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const response = await axios
        .create({
          withCredentials: true,
        })
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`);

      // console.log("response from backend ", response);

      if (response.data.status === "ok") {
        setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.result.accessToken}`;

        return axios(originalRequest);
      } else {
        removeItem(KEY_ACCESS_TOKEN);
        window.location.replace("/login", "_self");
        return Promise.reject(error);
      }
    }

    // console.log("axious error", error);

    return Promise.reject(error);
  },
  async (error) => {
    store.dispatch(setLoading(false));
    store.dispatch(
      showToast({
        type: TOAST_FAILURE,
        message: error.message,
      })
    );
    return Promise.reject(error);
  }
);
