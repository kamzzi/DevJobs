import { useRouteError } from "react-router";
import { Global } from "../../layout/Global/Global";
import { Error as CustomError } from "../../features/ui/Error/Error";
import styled from "./NotFound.module.css";
import { RoutesPaths } from "../../types/shared";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();

  const message =
    error instanceof Error ? error.message : "Error : (404) Not found.";

  return (
    <Global>
      <main className={styled["not-found"]}>
        <h1 className={styled.title}>Error Occured</h1>
        <CustomError error={message} />
        <Link to={RoutesPaths.HOME} className={styled.link}>
          Back to home
        </Link>
      </main>
    </Global>
  );
};
