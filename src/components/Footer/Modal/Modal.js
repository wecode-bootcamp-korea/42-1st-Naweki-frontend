import React from 'react';
import './Modal.scss';

function Modal({ setModalOpen }: props) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalBody" onClick={e => e.stopPropagation()}>
        <button className="modalClose" onClick={closeModal}>
          X
        </button>
        {props.children}
        <div className="location">현 위치를 선택하세요</div>
        <div className="africa">Africa</div>
      </div>
    </div>
  );
}

export default Modal;
