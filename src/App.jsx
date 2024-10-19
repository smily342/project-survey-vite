import React from "react";
import { QuestionOne } from "./components/QuestionOne.jsx"; // Corrected import path

export const App = () => {
  return (
    <div className="header-container">
      <header>
        <h1>Travel Preferences Survey</h1>
      </header>

      <QuestionOne />  {/* Renders the QuestionOne component */}
    </div>
  );
};

