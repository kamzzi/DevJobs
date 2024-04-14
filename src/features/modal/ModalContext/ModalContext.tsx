import { ReactNode, createContext, useEffect, useState } from "react";
import { useKey } from "../../../hooks/useKey";

type ModalContextData = {
  close: () => void;
  open: () => void;
  isOpen: boolean;
};

export const ModalContext = createContext<ModalContextData | null>(null);

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    document.body.removeAttribute("data-modal");
  };

  const open = () => {
    setIsOpen(true);
    document.body.setAttribute("data-modal", "true");
  };

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  useKey("Escape", close);

  return (
    <ModalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};
