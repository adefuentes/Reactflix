
export type MovieListResponse = {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<MovieInListType>;
};

export type MovieInListType = {
  "popularity": number;
  "vote_count": number;
  "video": boolean;
  "poster_path": string;
  "id": number;
  "adult": boolean;
  "backdrop_path": number;
  "original_language": number;
  "original_title": number;
  "genre_ids": Array<number>;
  "title": string;
  "vote_average": number;
  "overview": string;
  "release_date": string;
}
