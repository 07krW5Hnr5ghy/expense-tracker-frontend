import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Auto-close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg ${toastStyles[type]}`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-white">
        &times;
      </button>
    </div>
  );
};

export default Toast;
