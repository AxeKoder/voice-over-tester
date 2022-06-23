import React, { useContext } from 'react'
import Item from './Item'
import { TodoContext } from './TodoStore'
import SkeletonList from './Skeletons/SkeletonList'

const List = () => {
    const { todos, loading } = useContext(TodoContext)
    console.log(`List:: todos = ${JSON.stringify(todos)}`);
    
    // const skeletons = [...Array(10).keys()].map (index => ({id: index}))
    // console.log(`List::skeletons = ${JSON.stringify(skeletons)}`);
    
    return (
        <ul className="list_wrap"> 
            { loading ? 
                <SkeletonList /> : 
                (Array.isArray(todos) ? todos.map(todo => <Item key={todo.id} todo={todo}/>) : <h1>Hmm... No List</h1>)
            } 
        </ul>        
    )
}

export default List