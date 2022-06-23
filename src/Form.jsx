import React, { useState, useEffect, useContext, useRef } from 'react'
import { TodoContext } from './TodoStore'
import useFetch from './useFetch'
import './Form.css'
import BasePopupDom from './BasePopupDom'
import BasePopup from './BasePopup'
import $ from 'jquery'

const Form = () => {
    const { forceUpdate } = useContext(TodoContext)
    const inputRef = useRef(false)
    const [popupOn, setPopupOn] = useState(false)

    const { data, error, addWork } = useFetch() // hook

    const useAddTodoData = (e) => {
        e.preventDefault()
        console.log(`inputRef.current.value = ${inputRef.current.value}`)
        addWork(inputRef.current.value)
    }

    const showPopup = (e) => {
        e.preventDefault()     
        setPopupOn(true)   
    }

    const closePopup = () => {
        setPopupOn(false)
    }

    useEffect(() => {
        $('.content').addClass('my_popup')
    }, [popupOn])

    useEffect(() => {
        console.log('Form:: useEffect()');
        if (data) {
            alert(`${inputRef.current.value} added`)
            forceUpdate()
        }
    }, [data])

    return (
        <div>
            <form action="">
                <input type="text" ref={inputRef} />
                <button onClick={useAddTodoData}>할일 추가</button>
                <button className="margic-button" onClick={showPopup}>Accessibility Magic World!</button>
                {  
                    popupOn ? <BasePopupDom><BasePopup onClose={closePopup} /></BasePopupDom> : <></>
                }
            </form>
        </div>
    )
}

export default Form
