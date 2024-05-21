
import React, { useState } from 'react';

const BookingForm = ({ event }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} to ${event.name} with ${tickets} tickets.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Tickets:</label>
        <input type="number" value={tickets} min="1" onChange={(e) => setTickets(e.target.value)} required />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
