import { useMatches } from "@remix-run/react";
import type { IConfiguration } from "~/services/configuration/typings";
import type { IGenre } from "~/services/genre/typings";

interface IRootData {
  config: IConfiguration;
  genres: IGenre[];
}

const useRootData = () => {
  return useMatches()[0].data as IRootData
};

export default useRootData;