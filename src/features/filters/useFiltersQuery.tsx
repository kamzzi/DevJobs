import { useSearchParams } from "react-router-dom";
import { FiltersSchema, FiltersSchemaType } from "./FiltersSchema";
import { removeEmptyProperties } from "./helpers/helpers";

export enum FiltersWorkType {
  FULL = "full",
  ALL = "all",
}

export const useFiltersQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const time = searchParams.get("fullTime") === FiltersWorkType.FULL;

  const params = FiltersSchema.parse({
    title: searchParams.get("title") ?? "",
    location: searchParams.get("location") ?? "",
    fullTime: time ?? FiltersWorkType.ALL,
  });

  const setParams = (data: FiltersSchemaType) => {
    const betterData = removeEmptyProperties(data);

    const params = {
      ...betterData,
      fullTime: betterData.fullTime ? FiltersWorkType.FULL : FiltersWorkType.ALL,
    };

    setSearchParams(params);
  };

  return [params, setParams] as const;
};
