import { useCallback } from "react";
import useConfiguration from "./useConfiguration";

const useGetImagePath = () => {
  const config = useConfiguration();
  const url = (config?.images?.base_url);
  const getImagePath = useCallback(
    (path?: string, size: string = 'original') => {
      return `${url}/${size}/${path  || ""}`;
    },
    [url]
  );
  return getImagePath;
};

export default useGetImagePath;
