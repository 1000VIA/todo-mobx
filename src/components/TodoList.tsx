import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react";
import { useState } from "react";

import store, { Todo } from "../store";

// const handleLog: any = (() => {
//   console.log(store.todos);
// })();

// const showTodos = observer(handleLog);

function TodoListItems() {
  const [text, setText] = useState("");

  return (
    <>
      {console.log(store.todos)}
      {store.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => (todo.done = !todo.done)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e) => {
              setText(e.target.value);
              return (todo.text = e.target.value);
            }}
          />
          <Button mx={2} onClick={() => store.removeTodo(todo.id)}>
            Eliminar
          </Button>
          <Button
            mx={2}
            onClick={() => store.updateTodo(store.todos, todo.id, text)}
          >
            Editar
          </Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemsObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Lista de tareas</Heading>
      <TodoListItemsObserver />
    </>
  );
}

export default TodoList;
