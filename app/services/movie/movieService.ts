import RestAPIClient from "../RestAPIClient";
import type { IMovie, IMovieDetail, INowPlayingMovieRequest, IPageableData } from "./typings";

class MovieService extends RestAPIClient {
  constructor() {
    super("movie");
  }

  getNowPlayingMovies = async (
    req?: INowPlayingMovieRequest
  ): Promise<IPageableData<IMovie>> => {
    return this.get("/now_playing", req);
  };

  getTopRatedMovies = async (
    req?: INowPlayingMovieRequest
  ): Promise<IPageableData<IMovie>> => {
    return this.get("/top_rated", req);
  };

  getMovie = (id: string): Promise<IMovieDetail> => {
    return this.get(`/${id}`);
  };
}

export default new MovieService();
