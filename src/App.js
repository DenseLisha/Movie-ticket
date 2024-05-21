
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventListingPage from './Components/EventListingPage';
import EventDetailsPage from './Components/EventDetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EventListingPage />} />
                <Route path="/event/:id" element={<EventDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
