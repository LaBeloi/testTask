import axios from "axios";
import { boredApi } from "../config/variables.js";
import { priceQueries, accessibilityQueries, setPriceStatus, setAccessibilityStatus } from './helpers/statusDefiners.js';

const getActivities = async (user) => {
  let params = {};

  if (user) {
    params = {
      ...priceQueries[user.price.toLowerCase()],
      ...accessibilityQueries[user.accessibility.toLowerCase()]
    }
  }

  const { data } = await axios.get(boredApi, {
    params
  });
  
  if ("error" in data) {
    throw new Error(data.error)
  }

  const response = {
    ...data,
    accessibility: setAccessibilityStatus(data.accessibility),
    price: setPriceStatus(data.price)
  };

  return response
};

export default {
  getActivities
};
