import React, { useState } from 'react';
import Modal from 'react-modal';
const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    maxWidth: '50%',
    height:'60%',
    margin: 'auto',
    border: '1px solid #ccc',
    padding: '0px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
};
if (window.innerWidth <= 768) {
  modalStyle.content.maxWidth = '80%';
  modalStyle.content.height = '50%';
} 
const ImageModal = ({ iconSrc, imageSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <img
        src={iconSrc}
        alt="Icon"
        style={{ width: '70px', height: '35px', cursor: 'pointer' }}
        onClick={openModal}
        title="voir l’image"
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Image Modal"
      >
        <img src={imageSrc} alt="Image" style={{ width: '100%',height:'100%' , objectFit: 'cover' }} />

      </Modal>
    </div>
  );
};

export default ImageModal;