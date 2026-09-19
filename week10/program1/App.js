import React from "react";

function App() {
  const student = (
    <div>
      <h2>My Student Profile</h2>

      <p>Welcome to my student profile.</p>

      <ul>
        <li>Name: Anu</li>
        <li>Course: AI & DS</li>
        <li>Year: II Year</li>
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Writing Markup with JSX</h1>
      {student}
    </div>
  );
}

export default App;