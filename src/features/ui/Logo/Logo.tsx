import { Link } from "react-router-dom";
import { RoutesPaths } from "../../../types/shared";
import styled from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link to={RoutesPaths.HOME} className={styled.logo}>
      <img src="./assets/desktop/logo.svg" alt="DevJobs" />
    </Link>
  );
};
