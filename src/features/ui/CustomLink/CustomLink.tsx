import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "./CustomLink.module.css";

type CustomLinkProps = {
  children: ReactNode;
  to: string;
  modifier?: string;
  target?: string;
};

export const CustomLink = ({
  children,
  to,
  modifier,
  ...rest
}: CustomLinkProps) => {
  return (
    <Link
      {...rest}
      to={to}
      className={`${styled.link} ${styled[`link--${modifier}`]}`}
    >
      {children}
    </Link>
  );
};
