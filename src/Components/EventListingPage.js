import React from "react"; 
const EventListingPage=({onEventSelect})=>{
    
    return(
        <div>
            <h1> Upcoming Events</h1>
            {eventsData.map(event =>{
                <EventItem key={event.id} event={event}
                onEventSelect={onEventSelect}/>
            })}
        </div>
    )
}
export default EventListingPage;