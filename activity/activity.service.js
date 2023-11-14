import axios from "axios";
import { priceQueries, accessibilityQueries, setPriceStatus, setAccessibilityStatus } from './helpers/statusDefiners.js';

const getActivities = async (user) => {
  try {
    let searchQuery = '';

    if (user) {
      const priceSearchQuery = priceQueries[user.price.toLowerCase()];
      const accessibilitySearchQuery = accessibilityQueries[user.accessibility.toLowerCase()];
      searchQuery = `?${priceSearchQuery}&${accessibilitySearchQuery}`
    }

    const { data } = await axios.get(`http://www.boredapi.com/api/activity${searchQuery}`);
    
    const response = {
      ...data,
    };

    if ("accessibility" in data) {
      response.accessibility = setAccessibilityStatus(data.accessibility)
    }
    if ("price" in data) {
      response.price = setPriceStatus(data.price)
    }

    return response
  } catch (error) {
    throw new Error(error)
  }
};

export default {
  getActivities
};
