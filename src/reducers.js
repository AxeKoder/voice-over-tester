const todoReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            const newTodos = [...state.todos, { 'title': payload, 'id': state.length, 'status': 'todo' }]
            return { ...state, todos: newTodos }
        case "SET_INIT_DATA":
            return payload

        case "CHANGE_TODO_STATUS":
            return state.map(todo => {
                if (todo.id === +payload) {
                    if (todo.status === "done") {
                        todo.status = "todo"
                    } else {
                        todo.status = "done"
                    }
                }
                return todo
            })

        case "FORCE_UPDATE":
            return { ...state, increment: state.increment + 1 }

        default:
            break
    }
    return state
}

export default todoReducer