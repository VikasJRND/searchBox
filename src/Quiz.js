import React, { Component } from "react";

import "./Quiz.css";
import Question from "./Question";
const questions = [
  "question1",
  "How many days do we have in a week?",
  "3)How many days are there in a year?"
];
const options = [
  { A: "12", B: "3", C: "34", D: "10" },
  { A: "12", B: "3", C: "34", D: "10" }
];
const keys = ["A", "B"];
class Quiz extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>result</div>
        {questions.map((q, i) => {
          return <Question question={q} options={options[i]} keys={keys[i]} />;
        })}
      </div>
    );
  }
}

export default Quiz;
