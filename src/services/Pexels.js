import axios from "axios";

const API_KEY = "rcOT2n0l4UUVve6sRw2AvkVQYSos3UYGsqpY8hnputjodkSVDb34LzmC";
const client = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: API_KEY,
  },
});

export const getCuratedPhotos = async (image) => {
  try {
    const response = await client.get(`search?query=${image}&per_page=1&page=1`);
    return response.data.photos.length > 0 ? response.data.photos[0].src.medium : null;
  } catch (error) {
    console.error("Error fetching curated photos:", error);
    return null;
  }
};
