import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

//TODO Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token to headers if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

//TODO Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // You can process the response before returning it
    return response;
  },
  (error) => {
    // Handle response errors (e.g., unauthorized access)
    if (error.response && error.response.status === 401) {
      // Optional: Redirect to login page or refresh token logic
      console.error("Unauthorized access - Redirecting to login");
    }
    return Promise.reject(error);
  }
);

export default api;
