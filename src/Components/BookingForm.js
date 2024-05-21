import React, { useState } from "react";

const BookingForm = ({ onBooking }) => {
    const [tickets, setTickets] = useState(1);

    const handleTicketsChange = (e) => {
        setTickets(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onBooking({ tickets });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Tickets:
                <input type="number" value={tickets} onChange={handleTicketsChange} />
            </label>
            <button type="submit">Book ticket</button>
        </form>
    );
};

export default BookingForm;
