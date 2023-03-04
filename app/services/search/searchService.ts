import type { IMovie, IPageableData } from "../movie/typings";
import RestAPIClient from "../RestAPIClient";
import type { ISearchMovieRequest } from "./typings";

class SearchService extends RestAPIClient {
  constructor() {
    super("search");
  }

  searchMovies = async (
    req?: ISearchMovieRequest
  ): Promise<IPageableData<IMovie>> => {
    return this.get("/movie", req);
  };

}

export default new SearchService();
