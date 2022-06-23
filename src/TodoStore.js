import React, { useState, useEffect, useReducer } from 'react'

import useFetch from './useFetch'
import todoReducer from './reducers'
import $ from 'jquery'

export const TodoContext = React.createContext()

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [increment, setIncrement] = useState(0)
  const [popupOn, setPopupOn] = useState(false)

  const { loading, data, getWorks } = useFetch()

  const setInitData = (initData) => {
    dispatch({ type: 'SET_INIT_DATA', payload: initData })
  }

  const forceUpdate = () => {
    setIncrement(increment + 1)
  }

  const togglePopup = (on) => {
    setPopupOn(on)
  }

  useEffect(() => {
    getWorks()
  }, [increment])

  useEffect(() => {
    console.log(`=== TodoStore::useEffect([data]) ===`);
    setInitData(data)
  }, [data])

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch, forceUpdate, togglePopup }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoStore;
