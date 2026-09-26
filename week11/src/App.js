import React, { useState } from "react";
import "./App.css";

function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>🎓 Student Profile</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Branch:</strong> {props.branch}</p>
      <p><strong>Year:</strong> {props.year}</p>
    </div>
  );
}

function App() {
  const [hours, setHours] = useState(0);
  const [subject, setSubject] = useState("React JS");

  const increaseHours = () => {
    setHours(hours + 1);
  };

  const decreaseHours = () => {
    if (hours > 0) {
      setHours(hours - 1);
    }
  };

  return (
    <div className="app">
      <h1>📚 My Study Tracker</h1>

      <StudentCard
        name="Tejaswini"
        branch="AI & DS"
        year="2nd Year"
      />

      <div className="tracker-card">
        <h2>Today's Study</h2>

        <h3>{hours} Hour{hours !== 1 ? "s" : ""}</h3>

        <button onClick={decreaseHours}>−</button>
        <button onClick={increaseHours}>+</button>

        <div className="subject-section">
          <label>Select Subject: </label>

          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option>React JS</option>
            <option>Java</option>
            <option>Python</option>
            <option>Data Structures</option>
          </select>
        </div>

        <p className="message">
          📖 You are studying <strong>{subject}</strong>
        </p>
        <p className="status">
  {hours === 0
    ? "🌱 Start your study journey!"
    : hours < 3
    ? "👍 Good progress!"
    : "🔥 Excellent work!"}
</p>
      </div>
    </div>
  );
}

export default App;
