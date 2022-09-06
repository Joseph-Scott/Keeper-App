import React from "react";
import ReactDOM from "react-dom";
import { isTemplateExpression } from "typescript";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));

// CHALLENGE:

// 1. Implement the add note functionality.
// - Create a constant that keeps track of the title and content.
// - Pass the new note back to the App.
// - Add new note to an array.
// - Take array and render seperate Note components for each item.
// 2. Implement the delete note functionality.
