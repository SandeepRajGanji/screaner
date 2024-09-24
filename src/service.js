// src/services/upstoxService.js
import axios from 'axios';

const UPSTOX_BASE_URL = 'https://api.upstox.com/v2/option/chain';

const instance = axios.create({
  baseURL: UPSTOX_BASE_URL,
  timeout: 10000, // Adjust timeout as necessary
});

export const getStockData = async (accessToken, stockSymbol) => {
  try {
    const response = await instance.get(`/live/stock/${stockSymbol}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data; // Return the stock data
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error; // Rethrow error to handle in calling function
  }
};
