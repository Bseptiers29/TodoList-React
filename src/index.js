import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./js/todoListHook";

function App() {
  return <TodoList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
