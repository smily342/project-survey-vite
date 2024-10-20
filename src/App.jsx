import { useState } from 'react'; // Import des hooks nécessaires
import { QuestionOne } from "./components/QuestionOne.jsx"; // Import du composant QuestionOne
import { QuestionTwo } from "./components/QuestionTwo.jsx"; // Import du composant QuestionTwo

// Composant TravelCompanions
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

// Composant App pour inclure TravelCompanions, QuestionOne et QuestionTwo
export const App = () => {
  // Ajout d'un état pour gérer la sélection d'activités de voyage
  const [travelActivity, setTravelActivity] = useState("");

  return (
    <div className="header-container">
      <header>
        <h1>Travel Preferences Survey</h1>
      </header>

      {/* Rendre les composants TravelCompanions, QuestionOne, et QuestionTwo */}
      <TravelCompanions /> 
      <QuestionOne />  {/* Renders the QuestionOne component */}
      <QuestionTwo travelActivity={travelActivity} setTravelActivity={setTravelActivity} />  {/* Ajout de QuestionTwo avec gestion d'état */}
    </div>
  );
};

export default App;
