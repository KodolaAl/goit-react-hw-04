import axios from 'axios';

const ACCESS_KEY = "txNPOYYhbIzaw1D-mgjYqVKbplIXaKc9iznkfcsNh6c"
const BASE_URL = "https://api.unsplash.com/search/photos";
export const fetchImage = async (query, page, signal) => {
  
    const response = await axios.get(BASE_URL, {
        params: {
          query,
          per_page: 12,
          page,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },}, { signal })

//   const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${key}&query=${query}&page=${page}&per_page=${perPage}`, { signal });

  return response.data;
};

