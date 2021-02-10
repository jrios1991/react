import React from 'react';

const TodosContext = React.createContext({
    todos: [
        {
        id: Math.floor(Math.random() * 10000),
        text: "eat",
        isCompleted: false
        },
        {
        id: Math.floor(Math.random() * 10000),
        text: "sleep",
        isCompleted: false
        },
        {
        id: Math.floor(Math.random() * 10000),
        text: "code",
        isCompleted: false
        },
        {
        id: Math.floor(Math.random() * 10000),
        text: "pray",
        isCompleted: false
        },
        {
        id: Math.floor(Math.random() * 10000),
        text: "repeat",
        isCompleted: false
        },
    ]
});

export default TodosContext;