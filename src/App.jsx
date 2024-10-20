import { useState } from 'react';
import { QuestionOne } from "./components/QuestionOne.jsx";
import { QuestionTwo } from "./components/QuestionTwo.jsx";
import { QuestionThree } from "./components/QuestionThree.jsx"; 
import Summary from "./components/Summary.jsx";

export const App = () => {
  // Renamed travelCompanion to questionThree for consistency
  const [weatherPreference, setWeatherPreference] = useState("");
  const [travelActivity, setTravelActivity] = useState("");
  const [questionThree, setQuestionThree] = useState(""); // Renamed state variable
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="header-container">
      <header>
        <h1>Travel Preferences Survey</h1>
      </header>

      {showSummary ? (
        <Summary 
          weatherPreference={weatherPreference} 
          travelActivity={travelActivity} 
          questionThree={questionThree} // Pass the correct state here
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <QuestionOne setWeatherPreference={setWeatherPreference} />
          <QuestionTwo travelActivity={travelActivity} setTravelActivity={setTravelActivity} />
          <QuestionThree travelCompanion={questionThree} setTravelCompanion={setQuestionThree} /> {/* Corrected */}
          <button type="submit">Submit Survey!</button>
        </form>
      )}
    </div>
  );
};

export default App;
