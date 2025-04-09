import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {

    if (!isOpen || !image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      closeTimeoutMS={200} 
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;

