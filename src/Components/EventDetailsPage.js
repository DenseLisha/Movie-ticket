
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../data/eventData';
import BookingForm from './BookingForm';

const EventDetailsPage = () => {
    const { id } = useParams();
    const event = eventsData.find(event => event.id === parseInt(id));
    const [availability, setAvailability] = useState(event.availability);

    const handleBooking = (tickets) => {
        setAvailability(prev => prev - tickets);
    };

    if (!event) return <p>Event not found</p>;

    return (
        <div>
            <h1>{event.name}</h1>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Venue: {event.venue}</p>
            <p>Availability: {availability}</p>
            <BookingForm event={event} availability={availability} onBooking={handleBooking} />
        </div>
    );
};

export default EventDetailsPage;
