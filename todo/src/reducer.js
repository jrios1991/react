import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action) {
    switch(action.type){
        case "Add_Todo":
            if(!action.payload){
                return state;
            }
            if (state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }
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
        case "Edit_Todo":
            if(!action.payload){
                return state;
            }
            if (state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }
            const editTodo = {...state.currentTodo, text: action.payload}
            const editTodoIndex = state.todos.findIndex(
                t => t.id === state.currentTodo.id
            )
            const updatedTodos = [
                ...state.todos.slice(0, editTodoIndex),
                editTodo,
                ...state.todos.slice(editTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            };
        case "Remove_Todo":
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id)
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            };
        case "Set_Todo":
            return {
                ...state,
                currentTodo: action.payload
            }
        default:
            return state;
    }
}