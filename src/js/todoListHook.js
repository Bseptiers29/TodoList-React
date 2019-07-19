import React, { useState } from "react";
import Heading from "../assets/style/titleTodo";
import FormToDo from "../assets/style/formTodo";
import ListTodo from "../assets/style/listTodo";
import { Grommet } from "grommet";
import theme from "../assets/theme";
//const theme = require('../assets/theme');

export default function TodoList() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  return (
    <Grommet theme={theme}>
      <Heading />
      <FormToDo
        userInput={userInput}
        setUserInput={setUserInput}
        items={items}
        setItems={setItems}
      />
      <ListTodo
        userInput={userInput}
        setUserInput={setUserInput}
        items={items}
        setItems={setItems}
      />
    </Grommet>
  );
}
