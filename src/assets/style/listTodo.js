import React from "react";
import {
  Box,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody
} from "grommet";
import { Close } from "grommet-icons";

function ListTodo(props) {
  function deleteTodo(event, index) {
    event.preventDefault();
    let newtab = props.items.filter((item, i) => i !== index);
    props.setItems(newtab);
  }

  function renderTodos() {
    return props.items.map((item, index) => {
      return (
        <>
          <TableRow key={index}>
            <TableCell scope="row">{item}</TableCell>
            <TableCell scope="row">
              <Close
                cursor="pointer"
                onClick={event => deleteTodo(event, index)}
                size="medium"
                text-align="center"
              />
            </TableCell>
          </TableRow>
        </>
      );
    });
  }

  return (
    <Box direction="column" color="dark-1" pad="medium" width="large">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Items
            </TableCell>
            <TableCell scope="col" border="bottom">
              Delete
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>{renderTodos()}</TableBody>
      </Table>
    </Box>
  );
}

export default ListTodo;
