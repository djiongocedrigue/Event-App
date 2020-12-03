
import React from 'react';
import './EventDisplayer.css';

class EventDisplayer extends React.Component {
    render() {
      const { /* Event's elements to display are send by attributes */
        eventDay,
        eventHour,
        eventTitle,
        eventPlace,
        eventDescription,
      } = this.props;

      return (
        <div className="myEvent">
          <div className="eventDay">
            {eventDay}
          </div>
          <div className="eventTitle">
            {eventTitle}
          </div>
          <div className="eventHour">
            {eventHour}
          </div>
          <div className="eventDescription">
            {eventDescription}
          </div>
          <div className="eventPlace">
            {eventPlace}
          </div>
          <div className="detailsLink">
            + Event Details
          </div>
        </div>
      );
    }
}

export default EventDisplayer;