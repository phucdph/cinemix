import RestAPIClient from "../RestAPIClient";
import type { IGenre } from "./typings";

class GenreService extends RestAPIClient {
  constructor() {
    super("genre");
  }

  getGenres = async (): Promise<IGenre[]> => {
    const res = await this.get("/movie/list");
    return res.genres;
  };

}

export default new GenreService();
