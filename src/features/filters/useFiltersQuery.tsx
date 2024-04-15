import { useSearchParams } from "react-router-dom";
import { FiltersSchema, FiltersSchemaType } from "./FiltersSchema";

enum FiltersWorkType {
  FULL = "full",
  PART = "part",
}

export const useFiltersQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const time = searchParams.get("time") === FiltersWorkType.FULL;

  const params = FiltersSchema.parse({
    title: searchParams.get("title") ?? "",
    location: searchParams.get("location") ?? "",
    fullTime: time ?? FiltersWorkType.PART,
  });

  const setParams = ({ title, location, fullTime }: FiltersSchemaType) => {
    setSearchParams({
      title,
      location,
      time: fullTime ? FiltersWorkType.FULL : FiltersWorkType.PART,
    });
  };

  return [params, setParams] as const;
};
