import { useContext } from "react";
import { Modal } from "./ModalContext";


export const useModalContext = () => {
  return useContext(Modal);
}
