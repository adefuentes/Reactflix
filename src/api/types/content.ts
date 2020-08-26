import {MovieInListType} from "./movies";

export type ContentModel = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: GenreModel[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompanyModel[];
  production_countries: CountryModel[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: LanguageModel[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  related_content: Array<MovieInListType>;
}

type LanguageModel = {
  iso_639_1: string;
  name: string;
}

type CountryModel = {
  iso_3166_1: string;
  name: string;
}

type CompanyModel = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string
};

type GenreModel = {
  id: number;
  name: string;
}
