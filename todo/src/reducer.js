import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action) {
    switch(action.type){
        case "Add_Todo":
            const newTodo = {
                id: uuidv4(),
                // id:Math.floor(Math.random() * 10000),
                text: action.payload,
                isCompleted: false
            }
            const addedTodos = [...state.todos, newTodo]
            return {
                ...state,
                todos: addedTodos
            }
        case "Complete_Todo":
            const toggledTodos = state.todos.map(t => t.id === action.payload.id ? {...action.payload, isCompleted : !action.payload.complete } : t
                )
            return {
                ...state,
                todos: toggledTodos,
            };
        case "Remove_Todo":
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id)
            return {
                ...state,
                todos: filteredTodos
            };
        default:
            return state;
    }
}