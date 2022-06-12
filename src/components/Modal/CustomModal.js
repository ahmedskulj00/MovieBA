import React from "react";
import Modal from "react-modal";

const CustomModal = ({ children, modalIsOpen, closeModal, width, height }) => {
  const customStyles = {
    content: {
      width: width,
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
      >
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
