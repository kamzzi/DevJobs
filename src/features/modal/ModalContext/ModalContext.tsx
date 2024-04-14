import { ReactNode, createContext, useState } from "react";
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
  };

  const open = () => {
    setIsOpen(true);
  };

  useKey("Escape", close);

  return (
    <ModalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};
