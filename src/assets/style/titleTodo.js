import React from "react";
import { Heading } from "grommet";
import { Box } from "grommet";

export default () => (
  <Box
    direction="row"
    pad="medium"
    background="brand"
    border={{
      color: "border",
      size: "small",
      side: "all"
    }}
    justify="center"
  >
    <Heading level={1} size="large" margin="large">
      My Todo List
    </Heading>
  </Box>
);


