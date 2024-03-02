// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import EventList from './EventList'; // Adjust the path accordingly

function App() {

  const[events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {

      const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/v0";

      try {
        const response = await fetch(baseURL + '/public.json');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        console.log(data);
        setEvents(data); // Assuming the API returns an array of events
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures useEffect runs only once on mount


  return (
    <div>
      <h1>Welcome to CampusPulse!</h1>
      <p class="content">This is a student-built application that aims to combine several sources of events that are happening around you into a single convenient feed, no more flooding of your inbox with newsletters!</p>
      {events.length === 0 ? (
          <p>Loading...</p>
        ) : (<EventList events={events}></EventList>) }
    </div>
  );
}

export default App;
