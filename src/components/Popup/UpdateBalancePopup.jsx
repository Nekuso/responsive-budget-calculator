import React from 'react'
import "../../Styles/dist-css/UpdateBalancePopup.css"

export default function UpdateBalancePopup(props) {
    return (props.trigger) ? (
        
        <div className="popup">
            <div className="popup__inner">
                <button className="close__btn" onClick={() => props.setTrigger(false)}>close</button>

                {props.children}
            </div>
        </div>
        
    ) : "";
}
