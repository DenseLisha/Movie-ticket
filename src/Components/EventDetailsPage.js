
import React from 'react';
import BookingForm from './BookingForm';

const EventDetailsPage = ({ selectedEvent }) => {
  return (
    <div>
      <h2>{selectedEvent.name}</h2>
      <p>{selectedEvent.description}</p>
      <p>Date: {selectedEvent.date}</p>
      <p>Location: {selectedEvent.location}</p>
      <BookingForm event={selectedEvent} />
    </div>
  );
};

export default EventDetailsPage;
