import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import EventList from './EventList'; // Adjust the path accordingly

function App() {

  const[events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/campus-pulse-api');
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
      {events.length === 0 ? (
          <p>Loading...</p>
        ) : (<EventList events={events}></EventList>) }
    </div>
  );
}

export default App;
