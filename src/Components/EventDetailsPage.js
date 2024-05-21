import React from "react";
import BookingForm from "./BookingForm";
import { Link } from "react-router-dom";
const EventDetailsPage=({events})=>{
    return(
        <div>
            <h1>Events</h1>
            <ul>
                {events.map (event =>(
                    <li>
                        <h2>{event.name}</h2>
                        <p>{event.date} at {event.time}</p>
                        <p>{event.venue}</p>
                        <p>{event.availability} tickets avaialable</p>
                        <Link to={'/event'}>
                        View details and book
                        </Link>
                    </li>
                ))}
                
            
            </ul>
        </div>
    )
}
export default EventDetailsPage;