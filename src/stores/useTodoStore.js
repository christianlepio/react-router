import {create} from 'zustand'

//Define zustand store
export const useTodoStore = create((set) => ({
    todos: [],

    addTodo: (todo) => 
        set(state => ({
            todos: [todo, ...state.todos] 
        })),

    removeTodo: (todo) => 
        set(state => ({
            todos: state.todos.filter((item) => item !== todo)
        })),
}))