import React, { useState, useEffect,  useContext } from 'react';
import TodosContext from '../context'

function TodoForm(){
    const [todo, setTodo] = useState("");
    const { state:  { currentTodo = {}}, dispatch } = useContext(TodosContext);

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text)
        } else {
            setTodo('');
        }
    }, [currentTodo.text]);

    const handleSubmit = event => {
        event.preventDefault();
        if (currentTodo.text){
            dispatch({ type: "Edit_Todo", payload: todo});
        } else {
            dispatch({ type: "Add_Todo", payload: todo });
        }
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