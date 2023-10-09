import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=6370967ffb8f7c1193977659db3a8b4a";

export class TVshowAPI {
  static async fetchPopulars() {
    console.log(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    const response = await axios(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
