import { ReactNode, createContext, useState } from "react";

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

  return (
    <ModalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};
