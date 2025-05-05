import sprite from "../../img/sprite.svg";
import s from "./ModalCustom.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ModalCustom({ children, isOpen, onClose }) {
  const customStyles = {
    overlay: {
      overflow: "hidden",
      backgroundColor: "#191a1599",
    },
    content: {
      border: "none",
      padding: "0",
      borderRadius: "30px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button type="button" className={s.buttonClose} onClick={onClose}>
        <svg className={s.iconClose}>
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>
      {children}
    </Modal>
  );
}
