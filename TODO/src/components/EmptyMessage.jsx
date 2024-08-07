import { useContext } from "react";
import {TodoContext} from "../store/todo-Items-ContextProvider"
const EmptyMessage = () =>{

const {todoItems}=useContext(TodoContext)
    return <>
     {todoItems.length === 0 &&  <h2>Enjoy you day</h2>}
    </>
}

export default EmptyMessage;