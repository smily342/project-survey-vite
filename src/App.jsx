import { useState } from 'react';

const TravelCompanions = () => {
  const [travelCompanion, setTravelCompanion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setTravelCompanion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    setSubmitted(true); // Set the form as submitted
  };

  return (
    <div>
      <h2>Who do you usually prefer to travel with?</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
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

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Thank you for submitting!</h3>
          <p>You prefer to travel with: {travelCompanion}</p>
        </div>
      )}
    </div>
  );
};

export default TravelCompanions;
