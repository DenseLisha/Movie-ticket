
import React from 'react';
import { Link } from 'react-router-dom';
import eventsData from '../data/eventData';

const EventListingPage = () => {
    return (
        <div>
            <h1>Events</h1>
            <ul>
                {eventsData.map(event => (
                    <li key={event.id}>
                        <h2>{event.name}</h2>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Venue: {event.venue}</p>
                        <p>Availability: {event.availability}</p>
                        <Link to={`/event/${event.id}`}>
                            <button>View Details</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventListingPage;
