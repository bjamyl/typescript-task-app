import React from "react";
import { Todo } from "../model";
import "./inputfield.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return <div className="todos">
    
  </div>;
};

export default TodoList;
