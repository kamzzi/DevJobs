import { useParams } from "react-router";

export const Job = () => {
  const params = useParams();

  return <h1>Job! - {params.job}</h1>;
};
