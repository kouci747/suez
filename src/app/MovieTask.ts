export interface MovieTask {
  adult?: boolean;
  backdrop_path?: string;

  id?: number;

  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string; // '/9N3KwhzBCcqmFcqHpPCsjqfym9M.jpg'
  release_date?: string;
  title?: string;

  vote_average?: number;
  vote_count?: number;
}
