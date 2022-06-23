import React, { useContext } from 'react'
import './BasePopup.css'

const BasePopup = ({ onClose }) => {
    return (
        <div id="popup_wrap">
            <div className="dimmed">
                <div tabIndex="0" className="content" aria-label="VoiceOver Parent to children, I am Div Tag">
                    <a href="#" aria-label="VoiceOver Parent to children, I am A Tag">
                    <button>Link to Google</button>
                    <h2 tabIndex="0">This is Popup Title.</h2>
                    <button onClick={onClose}>Close</button>
                    <br/>
                    <a class="magic-part" href="#">Learn more <span class="visually-hidden">about secret</span></a>
                    </a>
                    
                </div>
            </div>
        </div>
        
    )
}

export default BasePopup