import './EventsDisplay.css';
import EventDisplayer from "./EventDisplayer";

function EventsDisplay() {
  return (
    <div className="EventDisplayPage">
      <header className="EventDisplayTitle">
        EVENTS
      </header>
      <div main className="Events">
        <EventDisplayer
          eventDay=" 11TH NOV"
          eventHour="16:00 - 19:00"
          eventTitle="Sunday Supper Club"
          eventPlace=" 144 WElm St, Chicago, II, 60610, USA"
          eventDescription="A culinary event with foods from all over the world. This is a weekly
        club you can join for small fee. Learn cooking methods from top chef..."
        />

        <EventDisplayer
          eventDay=" 13TH NOV"
          eventHour="06:30 - 08:30"
          eventTitle="Evenings in the Park"
          eventPlace="Estuary Park"
          eventDescription="We invite you to listen to live bands play beautiful music in the park. 
         Enjoy the sounds of Laureen Davids and the Kings, and enjoy wine tast..."
        />

        <EventDisplayer
          eventDay=" 15TH NOV"
          eventHour="08:00 - 15:00"
          eventTitle="Morning Brews&views"
          eventPlace="The Teapot and Brew Club"
          eventDescription="Enjoy free samples of our latest brews while overlooking the beautiful 
         site of our city. Plenty of iced and hot teas, plus gourmet coffee d..."
        />

        <EventDisplayer
          eventDay=" 11TH NOV"
          eventHour="16:00 - 19:00"
          eventTitle="Sunday Supper Club"
          eventPlace=" 144 WElm St, Chicagi, II, 60610, USA"
          eventDescription="A culinary event with foods from all over the world. This is a weekly
        club you can join for small fee. Learn cooking methods from top chef ..."
        />
      </div>
    </div>
  );
}

export default EventsDisplay;
