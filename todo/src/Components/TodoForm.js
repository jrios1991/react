import React, { useState, useContext } from 'react';
import TodosContext from '../context'

function TodoForm(){
    const [todo, setTodo] = useState("");
    const { dispatch } = useContext(TodosContext);

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: "Add_Todo", payload: todo })
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={event => setTodo(event.target.value)}
            value={todo}
            />
        </form>
    )
}

export default TodoForm;