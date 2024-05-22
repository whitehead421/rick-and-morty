import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

class ApiService {
  static async getAllCharacters(
    query?: {
      key: string;
      value: string;
    }[]
  ): Promise<Character[]> {
    let url = "";

    if (query) {
      const totalQueryString = query.map((q) => {
        return q.key + "=" + q.value;
      });

      url = "/?" + totalQueryString.join("&");
    } else {
      url = "/";
    }

    const response = await axiosInstance.get(url);
    return response.data.results;
  }
}

export default ApiService;
