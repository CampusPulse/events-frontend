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
      <p class="content">This is a student-built application that aims to be a proof of concept and minimal viable interface for a project that combines several sources of events that are happening around you into a single convenient feed, no more flooding of your inbox with newsletters!</p>

      <p class="content">Currently this app contains only public data from several sources, including campusgroups, university events, athletics, etc.<br/>If you want to ensure your event makes it to the list, be sure it is part of one of these feeds and is marked as "public".</p>

      <p class="content">This project is <a href="https://github.com/CampusPulse/">open source</a>. Please feel free to contribute if you find new sources of events to include. There are plans to add browsing events by categories, as well as some fun tools for helping you find events if you are ever in need of something new to do.</p>


      <p class="content">If you are interested in building your own tools on top of this data, the API endpoints are currently:
        <ul>
          <li>https://api.campuspulse.meepme.app/v0/public.json</li>
          <li>https://api.campuspulse.meepme.app/v0/public.ics</li>
        </ul>
        As the project is still fairly new, it is not recommended to rely on this data as things may change, be slow, or go down unexpectedly.
      </p>

      {events.length === 0 ? (
          <p>Loading...</p>
        ) : (<EventList events={events}></EventList>) }
    </div>
  );
}

export default App;
