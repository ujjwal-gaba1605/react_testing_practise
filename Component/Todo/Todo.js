import {useState} from "react";
import Header from "./Header/Header";
import "./Todo.css"
import Input from "./Input/Input";
import TodoList from "./TodoList";
function Todo() {

    const [todos, setTodos] = useState([]);

    return (
        <div className="todo">
            <Header title="Todo" />
            <Input
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo