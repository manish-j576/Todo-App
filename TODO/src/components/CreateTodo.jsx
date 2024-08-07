import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import styles from "./CreateTodo.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/todo-Items-ContextProvider";

const CreateTodo = ({ onClickAdd }) => {
  let todoNameElement = useRef();
  let dueDateElement = useRef();

  const handleOnClickAdd = (addNewItem) => {
    let itemName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    addNewItem(itemName, dueDate);
    event.preventDefault();
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
const {addNewItem}=useContext(TodoContext)

  return (
      <form
        onSubmit={() => handleOnClickAdd(addNewItem)}
        className={styles.enterTodo}
      >
        <input type="text" ref={todoNameElement} placeholder="Enter To-Do" />
        <input type="date" ref={dueDateElement} />
        <button className="btn btn-success">
          <IoMdAdd />
        </button>
      </form>
  );
};

export default CreateTodo;
