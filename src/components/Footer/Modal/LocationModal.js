import React from 'react';
import './LocationModal.scss';
import Modal from 'react-modal';

const LocationModalStyles = {
  // content: {
  //   top: '50%',
  //   left: '50%',
  //   right: 'auto',
  //   bottom: 'auto',
  //   marginRight: '-50%',
  //   transform: 'translate(-50%, -50%)',
  // },
};

Modal.setAppElement('#root');

const LocationModal = ({ isModalOpen, setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestclose={() => setIsModalOpen(false)}
      contentLabel="Example Modal"
      style={LocationModalStyles}
    >
      <div className="modal">
        <div className="modalBody">
          <button className="modalClose" onClick={closeModal}>
            X
          </button>
          <div className="location">현 위치를 선택하세요</div>
          <div className="africa">Africa</div>
        </div>
      </div>
    </Modal>
  );
};

export default LocationModal;
