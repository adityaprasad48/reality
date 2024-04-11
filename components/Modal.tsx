import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }: any) => {
  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if (!e.target.closest(".modal-content")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <>
        <div className="modal-overlay root opacity inline" />
        <div className="modal-content top_transition inline">{children}</div>
      </>,
      document.body
    )
  );
};

export default Modal;
