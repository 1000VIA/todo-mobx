import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react";

import store from "../store";

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="Nueva tarea"
        value={store.newTodo}
        onChange={(e) => (store.newTodo = e.target.value)}
      />
      <Button onClick={() => store.addTodo()}>Agregar</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
