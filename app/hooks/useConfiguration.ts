import useRootData from "./useRootData";

const useConfiguration = () => {
  return useRootData()?.config;
};

export default useConfiguration;
