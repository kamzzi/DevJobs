import { IoMdClose } from "react-icons/io";
import { ReactNode } from "react";
import styled from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Wrapper } from "../ui/Wrapper/Wrapper";
import { Button } from "../ui/Button/Button";
import { useModal } from "./ModalContext/useModal";
import FocusTrap from "focus-trap-react";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const { close } = useModal();

  return createPortal(
    <FocusTrap>
      <div className={styled.container}>
        <div className={styled.overlay} onClick={close} />
        <div className={styled.modal}>
          <Wrapper modifier="modal">
            <div className={styled.modal__content}>
              <div className={styled.modal__close}>
                <Button
                  modifier="modal-close"
                  aria-label="Close modal"
                  onClick={close}
                >
                  <IoMdClose className={styled.modal__icon} />
                </Button>
              </div>
              {children}
            </div>
          </Wrapper>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById("modal")!
  );
};
