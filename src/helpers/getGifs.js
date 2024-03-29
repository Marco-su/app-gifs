import axios from "axios";
import { API_KEY, API_URL } from "../constants/const";

//---Get searched gifs
export const getGifs = async (keyword, page) => {
  return await axios({
    url: `${API_URL}gifs/search?${API_KEY}&q=${keyword}&limit=20&offset=${
      20 * page
    }&rating=g&lang=en`,
  });
};

//---Get trending gifs
export const getTrendingGifs = async () => {
  return await axios({
    url: `${API_URL}gifs/trending?${API_KEY}&limit=20&rating=g`,
  });
};

//---Get single gif
export const getSingleGif = async (id) => {
  return await axios({
    url: `${API_URL}gifs/${id}?${API_KEY}`,
  });
};

//---Get trending term
export const getTrendingTerm = async () => {
  return await axios({
    url: `${API_URL}trending/searches?${API_KEY}`,
  });
};
