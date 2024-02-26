import React from 'react';

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
  const { title, start, end, location, description } = event;

  const formatDate = (dateString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <li style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>
        <strong>Start:</strong> {formatDate(start)}
      </p>
      <p>
        <strong>End:</strong> {formatDate(end)}
      </p>
      {location && <p><strong>Location:</strong> {location.street}, {location.city}, {location.state}</p>}
      {description && <p><strong>Description:</strong> {description}</p>}
    </li>
  );
};

export default EventList;
