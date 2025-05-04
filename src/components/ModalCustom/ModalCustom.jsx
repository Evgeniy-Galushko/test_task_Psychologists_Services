import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ModalCustom({ children, isOpen }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(239, 239, 240, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "wite",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onClose}
      style={{ customStyles }}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
}
