import React from 'react'
import TodoList from './zustandComponents/TodoList'

const Zustand = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-9">
                        <div className='text-center'>
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Zustand