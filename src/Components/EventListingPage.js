

import React from 'react';
import eventsData from '../data/eventData'; 

const EventListingPage = () => {
    return (
        <div>
            {eventsData.map(event => (
                <div key={event.id}>
                    <h2>{event.name}</h2>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Venue: {event.venue}</p>
                    <p>Availability: {event.availability}</p>
                </div>
            ))}
        </div>
    );
};

export default EventListingPage;
