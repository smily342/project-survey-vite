import React from "react";

export const QuestionTwo = ({ travelActivity, setTravelActivity }) => {
  return (
    <div className="QuestionTwo">
      <label>
        <h2>What kind of activities excite you the most while traveling?</h2>
        <select
          value={travelActivity || ""}
          onChange={(event) => setTravelActivity(event.target.value)}
        >
          <option value="" disabled>
            Select an activity
          </option>
          <option value="Relaxing by the beach or pool">
            Relaxing by the beach or pool
          </option>
          <option value="Hiking through mountains or forests">
            Hiking through mountains or forests
          </option>
          <option value="Exploring historic cities and museums">
            Exploring historic cities and museums
          </option>
          <option value="Trying adventure sports like surfing or ziplining">
            Trying adventure sports like surfing or ziplining
          </option>
        </select>
      </label>
    </div>
  );
};
