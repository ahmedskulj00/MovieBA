import React from "react";
import Modal from "react-modal";

const CustomModal = ({ children, modalIsOpen, closeModal, width, height }) => {
  const mobile = window.innerWidth < 768;

  const customStyles = {
    content: {
      width: mobile ? "90%" : width,
      height: height,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
