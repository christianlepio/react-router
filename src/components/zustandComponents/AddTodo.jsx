import React, { useEffect, useRef, useState } from 'react'
import { useTodoStore } from '../../stores/useTodoStore'

const AddTodo = () => {
    const addTodo = useTodoStore(state=>state.addTodo)
    const [newTodo, setNewTodo] = useState('')
    const inputItem = useRef()

    useEffect(()=>{
        inputItem.current.focus()
    }, [newTodo])

    const addTodoItem = (item) => {
        if (item.trim().length !== 0) {
            addTodo(item)
            setNewTodo('')
        }
    }

    return (
        <>
            <form 
                className='row justify-content-center mt-4'
                onSubmit={(e)=>{
                    e.preventDefault()
                    addTodoItem(newTodo)
                    inputItem.current.focus()
                }}
            >
                <div style={{width: '75vmin'}}>
                    <div className="input-group mb-2 shadow-sm rounded">
                        <input 
                            type="text" 
                            className={"form-control"} 
                            placeholder="Enter an Item Here..." 
                            aria-label="Enter an Item Here..." 
                            aria-describedby="button-addon2"
                            value={newTodo} 
                            onChange={(e)=>setNewTodo(e.target.value)}
                            ref={inputItem}
                        />
                        <button 
                            type='submit'
                            className="btn btn-outline-success" 
                            id="button-addon2"
                        >
                            <i className="bi bi-plus-circle"></i>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTodo