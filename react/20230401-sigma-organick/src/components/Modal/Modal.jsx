import Product from "../../sections/Product/Product";
import { createPortal } from "react-dom";
import "./Modal.scss";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useModalContext } from "../../context/ModalContext/useModalContext";
import { useProductsContext } from "../../context/ProductsContext/useProductsContext";

const Modal = () => {
  const { products } = useProductsContext();
  const { modal, setModalOpened, setModalClosed } = useModalContext();
  const dialog = useRef();
  const [scrollBarWidth, setScrollBarWidth] = useState(null);
  const [bodyPaddingRight, setBodyPaddingRight] = useState(null);
  const [bodyOverflow, setBodyOverflow] = useState(null);

  // Другое
  let clickOnBackdrop = false;

  function openModal() {
    setModalOpened(modal.productId);
    dialog.current.showModal();

    setScrollBarWidth(window.innerWidth - document.documentElement.clientWidth);
    setBodyPaddingRight(Number.parseFloat(getComputedStyle(document.body).paddingInlineEnd));
    document.body.style.paddingInlineEnd = bodyPaddingRight + scrollBarWidth + "px";
    setBodyOverflow(getComputedStyle(document.body).overflow);
    document.body.style.overflow = "hidden";

    dialog.current.addEventListener("pointerdown", backdrop_Pointerdown_Handler);
    dialog.current.addEventListener("click", backdrop_Click_Handler);
    document.addEventListener("keydown", document_Keydown_Escape_Handler);
    dialog.current.addEventListener("click", forCloseBtn_onModal_Click_Handler);
  }

  function closeModal() {
    dialog.current.close();

    // Для <body> вернуть отступы и прокрутку, которые были до открытия модального окна
    document.body.style.paddingInlineEnd = bodyPaddingRight + "px";
    document.body.style.overflow = bodyOverflow;

    dialog.current.removeEventListener("pointerdown", backdrop_Pointerdown_Handler);
    dialog.current.removeEventListener("click", backdrop_Click_Handler);
    document.removeEventListener("keydown", document_Keydown_Escape_Handler);
    dialog.current.removeEventListener("click", forCloseBtn_onModal_Click_Handler);
  }

  // При открытом модальном окне нажали "Escape"
  //   =>  Закрыть модальное окно
  function document_Keydown_Escape_Handler(evt) {
    if (evt.code !== "Escape") return;
    evt.preventDefault();

    setModalClosed();
  }

  // Надавили указатель (ЛКМ)
  //    => Проверить и записать, является ли целевой элемент подложкой
  function backdrop_Pointerdown_Handler(evt) {
    if (evt.which !== 1) return;

    clickOnBackdrop = evt.target.classList.contains("modal");
  }

  // "Клик" в области модального окна
  //    =>  Если переменная "надавили указатель" === true, закрыть модальное окно
  function backdrop_Click_Handler(evt) {
    if (evt.which !== 1) return;
    if (clickOnBackdrop === false) return;
    
    setModalClosed();
  }

  // В открытом модальном окне кликнули на кнопку "Закрыть"
  //    =>  Закрыть модальное окно
  function forCloseBtn_onModal_Click_Handler(evt) {
    if (evt.target.dataset.closeBtn === undefined) return;
    evt.preventDefault();

    setModalClosed();
  }

  useEffect(() => {
    if (modal.isOpen === true) {
      openModal();
    } else {
      closeModal();
    }
  }, [modal.isOpen])

  return createPortal(<>
    <dialog className={clsx("modal")} ref={dialog}>
      <div className="modal__content">
        <Product {...products.find(({id}) => id === modal.productId)}/>
      </div>
    </dialog>
  </>, document.body);
}

export default Modal;
