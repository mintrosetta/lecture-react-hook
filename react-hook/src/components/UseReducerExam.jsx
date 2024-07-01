import { useState, useReducer } from "react";

const intialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false
    }
]

function reducer(state, action) {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete }
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

export default function UseReducerExam() {
    const [todos, dispatch] = useReducer(reducer, intialTodos);

    function handleComplete(todo) {
        dispatch({ type: "COMPLETE", id: todo.id });
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)}/>
                    <span>{todo.title}</span>
                </div>
            ))}
        </div>
    );
}