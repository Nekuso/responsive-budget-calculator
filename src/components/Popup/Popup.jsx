import React from 'react'
import "../../Styles/dist-css/Popup.css"

export default function Popup(props) {
    return (props.trigger) ? (
        
        <div className="popup">
            <div className="popup__inner">
                <i className='bx bxs-x-square close__btn' onClick={() => props.setTrigger(false)}></i>
                {props.children}
            </div>
        </div>
        
    ) : "";
}
