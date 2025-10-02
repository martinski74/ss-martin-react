"use client";

import React from 'react';

interface ContactConfirmationModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ContactConfirmationModal = ({ isVisible, onClose }: ContactConfirmationModalProps) => {
  if (!isVisible) {
    return null;
  }

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle: React.CSSProperties = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    color: 'black',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '1.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#f05200',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#d44800',
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h2>Съобщението е изпратено успешно!</h2>
        <p>Благодарим Ви, че се свързахте с нас. Ще се свържем с Вас скоро.</p>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor as string)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor as string)}
          onClick={onClose}
        >
          Затвори
        </button>
      </div>
    </div>
  );
};

export default ContactConfirmationModal;
