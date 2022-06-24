import React, {useState} from 'react'
import "../../Styles/dist-css/Status.css"
import BillStatus from './BillStatus/BillStatus'
import ExpenseStatus from './ExpenseStatus/ExpenseStatus'

export default function Status() {

    function play() {
        var audio = new Audio("sound/click.mp3")
        audio.play()
    }

    const [active, setActive] = useState ("FirstButton")

    return (
        <div className="status">
            <div className="option__status">
                <button onClick={() => {
                    play()
                    setActive("FirstButton")
                }} className="bills__status__btn">
                    Bills
                </button>
                <button onClick={() => {
                        play()
                    setActive("SecondButton")
                    }} className="expenses__status__btn">
                    Expenses
                </button>
            </div>

            <div className="status__container">
                {active === "FirstButton" && <BillStatus />}
                {active === "SecondButton" && <ExpenseStatus />}

            </div>

        </div>
    )
}
