import axios from 'axios';

export const fetchImage = async (query, page, perPage, signal) => {
    const key = "txNPOYYhbIzaw1D-mgjYqVKbplIXaKc9iznkfcsNh6c"
  const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${key}&query=${query}&page=${page}&per_page=${perPage}`, { signal });
  return response.data;
};