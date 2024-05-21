
import React, { useState } from 'react';

const BookingForm = ({ event, availability, onBooking }) => {
    const [tickets, setTickets] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tickets <= 0 || tickets > availability) {
            alert("Invalid number of tickets");
            return;
        }
        onBooking(tickets);
        alert(`Successfully booked ${tickets} tickets for ${event.name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Number of tickets:
                <input
                    type="number"
                    value={tickets}
                    onChange={(e) => setTickets(parseInt(e.target.value))}
                    min="1"
                    max={availability}
                />
            </label>
            <button type="submit">Book Tickets</button>
        </form>
    );
};

export default BookingForm;
