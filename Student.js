import React from "react";
import Subject from "./Subject";

function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: Anu</p>
      <p>Course: AI & DS</p>

      <Subject />
    </div>
  );
}

export default Student;