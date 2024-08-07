import { useContext, useState } from "react";
import AppName from "./components/AppName";
import CreateTodo from "./components/CreateTodo";
import TodoItemsContainer from "./components/TodoItemsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmptyMessage from "./components/EmptyMessage";
import { TodoContext } from "./store/todo-Items-ContextProvider";

function App() {
  let [todoItems, setTodoItems] = useState([
    { todo: "buy milk", date: "2023-09-12" },
  ]);
  const addNewItem = (todoName, todoDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { todo: todoName, date: todoDate },
    ]);
  };
  const deleteItem = (itemName) => {
    let newTodoList = todoItems.filter((item) => item.todo !== itemName);
    setTodoItems(newTodoList);
  };
  // const obj=[{ todo: "buy milk", date: "2023-09-12" }]
  return (
    <TodoContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <div className="todoContainer">
        <AppName></AppName>
        <CreateTodo></CreateTodo>
        <EmptyMessage></EmptyMessage>
        <TodoItemsContainer></TodoItemsContainer>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
