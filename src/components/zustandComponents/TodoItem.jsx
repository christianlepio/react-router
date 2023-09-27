import React from 'react'
import { useTodoStore } from '../../stores/useTodoStore'

const TodoItem = ({todo}) => {
    const removeTodo = useTodoStore(state => state.removeTodo)

    return (
        <>
            <li className="list-group-item text-start">
                <button 
                    className="btn btn-outline-danger"
                    onClick={()=>removeTodo(todo)}
                > 
                    X 
                </button>

                <span className='mx-4'>{todo}</span>
            </li>
        </>
    )
}

export default TodoItem