import React, { useState } from "react";
import BookingForm from "./Components/BookingForm";
import EventDetailsPage from "./Components/EventDetailsPage";
import EventListingPage from "./Components/EventListingPage";
 const App=()=>{
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleEventSelect=(event)=>{
    setSelectedEvent(event)
  }
  return(
    <>
    <h1>BookMyShow</h1>
    {selectedEvent ? (
      <EventDetailsPage selectedEvent={selectedEvent}/>
    ):
    (
      <EventListingPage onEventSelect={handleEventSelect}/>
    )}
    
    </>
  )
 }
 export default App;