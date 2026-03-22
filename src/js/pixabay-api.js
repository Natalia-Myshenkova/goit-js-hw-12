import axios from "axios";


const API_KEY = '55065937-212aaf594fb16882d72e56cb6'; 
const BASE_URL = "https://pixabay.com/api/";


export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Помилка запиту:", error);
    return null;
  }
}