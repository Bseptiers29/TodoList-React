import React from "react";
import { TextInput, Form, Button, Box } from "grommet";

function FormToDo(props) {
  function addToDo(event) {
    event.preventDefault();
    props.setUserInput("");
    props.setItems([...props.items, props.userInput]);
  }

  return (
    <>
      <Form>
        <Box margin="medium" justify="center" direction="row" pad="xsmall">
          <TextInput
            value={props.userInput}
            type="text"
            placeholder="Fill one item"
            onChange={event => props.setUserInput(event.target.value)}
            size="large"
          />
        </Box>
        <Box margin="medium" justify="center" direction="row" pad="small">
          <Button
            onClick={addToDo}
            type="submit"
            primary
            color="brand"
            label="Ajouter"
            cursor="pointer"
          />
        </Box>
      </Form>
    </>
  );
}

export default FormToDo;
