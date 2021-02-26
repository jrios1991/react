import React, {useContext} from 'react';
import TodosContext from '../context';

function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
    const title = state.todos.length > 0 ? `You have ${state.todos.length} things To-Do!` :
    "You have nothing to do :(";

    return (
        <div>
            <h1>{title}</h1>
            <ul> 
                {/* used 'something' to better grasp mapping */}
                {state.todos.map(something => (
                    <li key={something.id}>
                        <span
                        style={{textDecoration: something.isCompleted ? 'line-through' : ''}}>
                            {something.text}
                        </span>
                        <button onClick={() => dispatch({ type: "Complete_Todo", payload: something})}>
                            Complete
                        </button>
                        <button
                            onClick={() => dispatch({ type: "Remove_Todo", payload: something})}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                        <button
                            onClick={() => dispatch({ type: "Set_Todo", payload: something})}
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default TodoList;