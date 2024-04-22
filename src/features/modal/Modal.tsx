import { IoMdClose } from "react-icons/io";
import { ReactNode, useEffect, useRef } from "react";
import styled from "./Modal.module.css";
import { createPortal } from "react-dom";
import { Wrapper } from "../ui/Wrapper/Wrapper";
import { Button } from "../ui/Button/Button";
import { useModal } from "./ModalContext/useModal";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const { close, isOpen } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const modalElement = modalRef.current;
      //add any focusable HTML element you want to include to this string
      const focusableElements = modalElement!.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          close();
        }
      };

      modalElement?.addEventListener("keydown", handleTabKeyPress);
      modalElement?.addEventListener("keydown", handleEscapeKeyPress);

      return () => {
        modalElement?.removeEventListener("keydown", handleTabKeyPress);
        modalElement?.removeEventListener("keydown", handleEscapeKeyPress);
      };
    }
  }, [isOpen, close]);

  return createPortal(
    <div className={styled.container} data-testid="modal">
      <div className={styled.overlay} onClick={close} data-testid="overlay" />
      <div className={styled.modal} ref={modalRef}>
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
    </div>,
    document.body
  );
};
