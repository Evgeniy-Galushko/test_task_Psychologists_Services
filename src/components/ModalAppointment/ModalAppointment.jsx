import sprite from "../../img/sprite.svg";
import s from "./ModalAppointment.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ModalAppointment({ children, isOpen, onClose }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(25, 26, 21, 0.3)",
    },
    content: {
      border: "none",
      overflowY: "scroll",
      padding: "0",
      borderRadius: "30px",
      top: "50%",
      left: "50%",
      right: "auto",
      with: "auto",
      height: "100%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
