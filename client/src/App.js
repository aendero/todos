import React, {Fragment} from "react";
import EditTodo from "./components/EditTodo";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodos";

function App() {
  return (
    <Fragment >
      <div className="container">
        <InputTodo />
        <ListTodo />
        <EditTodo />
      </div>
    </Fragment>
  )
}

// App -главный файл

export default App;
