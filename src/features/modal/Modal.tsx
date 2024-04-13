import { ReactNode } from "react";
import styled from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Wrapper } from "../ui/Wrapper/Wrapper";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <div className={styled.overlay}>
      <div className={styled.modal}>
        <Wrapper modifier="modal">
          <div className={styled.modal__content}>{children}</div>
        </Wrapper>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};
