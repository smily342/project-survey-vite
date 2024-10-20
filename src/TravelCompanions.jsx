import { useState } from 'react'; // Import seulement useState

const TravelCompanions = () => {
  const [travelCompanion, setTravelCompanion] = useState("");

  const handleInputChange = (event) => {
    setTravelCompanion(event.target.value);
  };

  return (
    <div>
      <h2>Who do you usually prefer to travel with?</h2>
      
      <label>
        <input 
          type="radio" 
          name="travelCompanion" 
          value="Family" 
          checked={travelCompanion === "Family"} 
          onChange={handleInputChange} 
        />
        Family – I love family trips with kids or relatives.
      </label>
      
      <label>
        <input 
          type="radio" 
          name="travelCompanion" 
          value="Friends" 
          checked={travelCompanion === "Friends"} 
          onChange={handleInputChange} 
        />
        Friends – Adventures are more fun with friends.
      </label>
      
      <label>
        <input 
          type="radio" 
          name="travelCompanion" 
          value="Solo" 
          checked={travelCompanion === "Solo"} 
          onChange={handleInputChange} 
        />
        Solo – I enjoy discovering new places on my own.
      </label>
      
      <label>
        <input 
          type="radio" 
          name="travelCompanion" 
          value="Partner" 
          checked={travelCompanion === "Partner"} 
          onChange={handleInputChange} 
        />
        Partner – A romantic getaway is always ideal.
      </label>

      {/* Add more JSX if needed */}
    </div>
  );
};

export default TravelCompanions;
