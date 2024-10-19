import React from "react";

export const QuestionOne = () => {
    return (
        <div className=" QuestionOne">
            <h2> Do you enjoy warm or cold weather when youb are on vacation?</h2>

            <label>
                <input className="radio-button1"
                    type="radio"
                    value="warm"
                />
                warm
            </label>

            <label>
                <input className="radio-button2"
                    type="radio"
                    value="cold"
                />
                cold
            </label>

        </div>

    );
};
