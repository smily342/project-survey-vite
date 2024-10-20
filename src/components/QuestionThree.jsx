import { useState } from 'react';

export const QuestionThree = ({ travelCompanion, setTravelCompanion }) => {
  const handleInputChange = (event) => {
    setTravelCompanion(event.target.value);
  };

  return (
    <div className="QuestionThree">
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
      <br />
      <br />
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
      <br />
      <br />
      <label className="OptionThree">
        <input 
          type="radio" 
          name="travelCompanion" 
          value="Solo" 
          checked={travelCompanion === "Solo"} 
          onChange={handleInputChange} 
        />
        Solo – I enjoy discovering new places on my own.
      </label>
      <br />
      <br />
      <label className="OptionFour">
        <input 
          type="radio" 
          name="travelCompanion" 
          value="Partner" 
          checked={travelCompanion === "Partner"} 
          onChange={handleInputChange} 
        />
        Partner – A romantic getaway is always ideal.
      </label>
    </div>
  );
};

