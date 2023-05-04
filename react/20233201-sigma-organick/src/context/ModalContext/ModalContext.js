import { createContext } from "react";
import { useState } from "react";

export const Modal = createContext();

export const ModalContext = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    productId: null
  });

  const setModalOpened = (id) => {
    setModal((prev) => ({isOpen: true, productId: id}));
  }

  const setModalClosed = (id) => {
    setModal((prev) => ({isOpen: false, productId: null}));
  }

  return (
    <Modal.Provider value={{ modal, setModalOpened, setModalClosed }}>
      {children}
    </Modal.Provider>
  );
}
