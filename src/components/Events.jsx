import { useState } from "react";  

const Events = () => {  
  const [event, setEvent] = useState('');  

  const handleEvents = () => {  
    setEvent('Event description here');   
    console.log('Event has been set:', event);  
  };  

  return (  
    <div className="grid justify-center">  
      <h1>Events</h1>  
      <p>This is a {event}</p>  
      
      <button onClick={handleEvents} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">  
        See More Events  
      </button>  
    </div>  
  );  
};  

export default Events;