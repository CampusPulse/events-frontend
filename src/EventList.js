import React from 'react';
import './EventList.css';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <EventCard key={event.identifier} event={event} />
        ))}
      </ul>
    </div>
  );
};

const EventCard = ({ event }) => {
  const { title, start, end, location, description, host, source } = event;

  const {source_link} = source

  const formatDate = (dateString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const formatTime = (dateString) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <li style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>
        <strong>Time:</strong> {formatDate(start)} - {formatTime(end)}
      </p>
      {host && <p><strong>Host:</strong> {host}</p>}
      {source_link && <p><strong>Link:</strong> <a href={source_link}>{source_link}</a></p>}
      <details>
        {location && <p><strong>Location:</strong> {location.street}, {location.city}, {location.state}</p>}
        {description && <p><strong>Description:</strong> {description}</p>}
      </details>
    </li>
  );
};

export default EventList;
