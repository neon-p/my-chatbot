import React, { useState } from 'react';
import './welcome.css';
import RegisterModal from './RegisterModal';

function WelcomePage({ onStartChat }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to My Chatbot</h1>
      <p>Click a button below to proceed.</p>
      <div className="button-container">
        <button onClick={onStartChat}>Start Chat</button>
        <button onClick={openModal}>Register</button>
      </div>
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default WelcomePage;