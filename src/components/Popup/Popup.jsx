import React from 'react'
import "../../Styles/dist-css/Popup.css"

export default function Popup(props) {
    const popup = document.querySelector("popup")

    return (props.trigger) ? (
        
        
        <div className="popup show">
            <div className="popup__inner">
                <i className='bx bxs-x-square close__btn' onClick={
                    () => {
                        setTimeout(() =>{
                            popup.classList.remove("show")
                        },800)

                        props.setTrigger(false)
                    }

                }></i>
                {props.children}
            </div>
        </div>
        
    ) : "";
}
