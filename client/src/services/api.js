import axios from 'axios';

// Create axios instance with increased timeout and retry configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 30000, // Increased to 30 seconds
  headers: {
    'Content-Type': 'application/json'
  }
});

// Retry logic for failed requests
api.interceptors.response.use(null, async (error) => {
  const originalRequest = error.config;
  
  if ((error.code === 'ECONNABORTED' || error.message.includes('timeout')) && !originalRequest._retry) {
    originalRequest._retry = true;
    console.log('Request timed out, retrying...');
    return api(originalRequest);
  }
  return Promise.reject(error);
});

// Menu API with improved error handling
export const getMenu = async () => {
  let retries = 3;
  
  while (retries > 0) {
    try {
      const response = await api.get('/menu');
      return response.data;
    } catch (error) {
      retries--;
      if (retries === 0) {
        if (error.code === 'ECONNABORTED') {
          throw new Error('Connection timed out. Please check your database connection.');
        }
        throw error;
      }
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

// Cart/Order API
export const placeOrder = async (cartItems) => {
  try {
    const response = await api.post('/cart', { items: cartItems });
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};

// Orders API (Admin)
export const getOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export default api;
