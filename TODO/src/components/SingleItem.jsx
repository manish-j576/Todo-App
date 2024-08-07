import { TodoContext } from "../store/todo-Items-ContextProvider";
import { useContext } from "react";
import styles from "./TodoItemsContainer.module.css";
import { MdOutlineDelete } from "react-icons/md";
const SingleItem = () => {

const {todoItems, deleteItem}=useContext(TodoContext);
  return (
    <>
      {todoItems.map((items) => (
        <li className={`${styles.todoItem}`}>
          <h6 className={styles.todoName}>{items.todo}</h6>
          <p className="paragraph">{items.date}</p>
          <button onClick={()=>deleteItem(items.todo)} type="button" className="btn btn-danger">
          <MdOutlineDelete />

          </button>
        </li>
      ))}
    </>
  );
};

export default SingleItem;
