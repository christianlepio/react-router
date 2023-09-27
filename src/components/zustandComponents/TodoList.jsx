import React from 'react'
import AddTodo from './AddTodo'
import { useTodoStore } from '../../stores/useTodoStore'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = useTodoStore(state => state.todos)

    return (
        <>
            <h1 className='fs-1 mt-5'>
                Learning Zustand
            </h1>
            <AddTodo />
            <ul className="list-group mt-4">
                {todos.length > 0 && todos.map((todo, index)=>(
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList