import React, { useContext } from 'react'
import ReactDom from 'react-dom'

const BasePopupDom = ({ children }) => {
    const el = document.getElementById('root')
    return ReactDom.createPortal(children, el)
}

export default BasePopupDom