import React from "react";

export const QuestionOne = ({ setWeatherPreference }) => {
    const handleChange = (event) => {
        setWeatherPreference(event.target.value);
    };

    return (
        <div className="QuestionOne">
            <h2>Do you enjoy warm or cold weather when you are on vacation?</h2>
            <label>
                <input
                    className="radio-button1"
                    type="radio"
                    value="warm"
                    onChange={handleChange}
                />
                warm
            </label>

            <label>
                <input
                    className="radio-button2"
                    type="radio"
                    value="cold"
                    onChange={handleChange}
                />
                cold
            </label>
        </div>
    );
};

