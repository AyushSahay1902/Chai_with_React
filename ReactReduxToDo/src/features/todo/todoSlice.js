import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, title: "Todo 1", completed: false}],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload.id;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        updateTodo: (state, action) => {
            const id = action.payload.id;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.title = action.payload.title;
            }
        },
        deleteTodo: (state, action) => {
            const id = action.payload.id;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },

    }
});

export const {addTodo, removeTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;