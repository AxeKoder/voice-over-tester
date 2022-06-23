import React, { useContext } from 'react'
import './Header.css'
import { TodoContext } from './TodoStore'

const Header = () => {
    const { todos } = useContext(TodoContext)

    return (
        <>
            <h1>React UseHooks APP</h1>
            <div className="countInfo">TODO !&nbsp;
            {Array.isArray(todos) && todos ? todos.filter(v => v.status === "todo").length : <></>}
            &nbsp;works are ready
            </div>
        </>
    )
}

export default Header