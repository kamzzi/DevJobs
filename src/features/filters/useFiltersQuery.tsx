import { useSearchParams } from "react-router-dom";
import { FiltersSchema } from "./FiltersSchema";

enum FiltersWorkType {
  FULL = "full",
  PART = "part",
}

export const useFiltersQuery = () => {
  const [searchParams] = useSearchParams();

  const time = searchParams.get("time") === FiltersWorkType.FULL;

  const params = FiltersSchema.parse({
    title: searchParams.get("title") ?? "",
    location: searchParams.get("location") ?? "",
    fullTime: time ?? FiltersWorkType.PART,
  });

  return [params] as const;
};
