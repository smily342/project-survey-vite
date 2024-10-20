import { useState } from 'react';
import { QuestionOne } from "./components/QuestionOne.jsx";
import { QuestionTwo } from "./components/QuestionTwo.jsx";
import { QuestionThree } from "./components/QuestionThree.jsx"; 
import Summary from './components/Summary.jsx';

export const App = () => {
  // State for each question
  const [weatherPreference, setWeatherPreference] = useState("");
  const [travelActivity, setTravelActivity] = useState("");
  const [travelCompanion, setTravelCompanion] = useState(""); // Updated to match QuestionThree
  const [showSummary, setShowSummary] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="header-container">
      <header>
        <h1>Travel Preferences Survey</h1>
      </header>

      {/* Conditionally render the summary or form */}
      {showSummary ? (
        <Summary 
          weatherPreference={weatherPreference} 
          travelActivity={travelActivity} 
          questionThree={travelCompanion} // Pass travelCompanion to Summary (renamed as questionThree)
        />
      ) : (
        <form onSubmit={handleSubmit}>
          {/* QuestionOne */}
          <QuestionOne setWeatherPreference={setWeatherPreference} />
          
          {/* QuestionTwo */}
          <QuestionTwo travelActivity={travelActivity} setTravelActivity={setTravelActivity} />
          
          {/* QuestionThree */}
          <QuestionThree 
            travelCompanion={travelCompanion} // Pass travelCompanion state
            setTravelCompanion={setTravelCompanion} // Pass setter function
          />

          {/* Submit button */}
          <button type="submit">Submit Survey!</button>
        </form>
      )}
    </div>
  );
};

export default App;
