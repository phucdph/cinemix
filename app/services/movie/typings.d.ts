import { IGenre } from "../genre/typings";

export interface IPageableData<T> {
  results: T[];
  pages: number;
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface INowPlayingMovieRequest {
  language?: string;
  page?: number | string;
  region?: string;
}

export interface ISimilarMoviesRequest {
  language?: string;
  page?: number | string;
  region?: string;
  movie_id: string | number;
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ICollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
