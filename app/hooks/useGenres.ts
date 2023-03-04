import { useMemo } from "react";
import useRootData from "./useRootData";
import keyBy from "lodash/keyBy";

const useGenres = () => {
  return useRootData()?.genres || [];
};

export const useGenresById = () => {
  const genres = useGenres();
  const genresById = useMemo(() => keyBy(genres, "id"), [genres]);
  return genresById;
};

export default useGenres;
