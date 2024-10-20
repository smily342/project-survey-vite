const Summary = ({ weatherPreference, travelActivity, questionThree }) => { 
    return (
        <div className="summary-section">
            <h2>Survey Summary</h2>
            <p><strong>Weather Preference:</strong> {weatherPreference}</p>
            <p><strong>Favorite Travel Activity:</strong> {travelActivity}</p>
            <p><strong>Preferred Travel Companion:</strong> {questionThree}</p> 
        </div>
    );
};

export default Summary;
