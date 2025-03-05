import React, { useState } from 'react';
import './RegisterModal.css';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function RegisterModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, age, phone, emergencyContact };

    console.log('Form submitted:', formData);

    try {
      const docRef = await addDoc(collection(db, 'registrations'), formData);
      console.log('Document written with ID: ', docRef.id);
      alert('Registration successful');
      onClose();
      window.location.href = '/';
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Registration failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input
            type="tel"
            id="emergencyContact"
            name="emergencyContact"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;