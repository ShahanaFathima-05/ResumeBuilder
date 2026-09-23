import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});


// Response Interceptor
axiosInstance.interceptors.response.use(

  (response) => {

    console.log("Response received");

    return response;

  },

  (error) => {

    if (error.response) {

      const status = error.response.status;

      if (status === 404) {
        console.log("API not found!!");
      }

      else if (status === 500) {
        console.log("Server Error!!");
      }

      else {
        console.log("Error:", error.message);
      }

    }

    else if (error.request) {

      console.log("No response from Server!!");

    }

    else {

      console.log("Error:", error.message);

    }

    return Promise.reject(error);

  }

);

export default axiosInstance;