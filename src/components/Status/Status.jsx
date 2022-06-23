import React, {useState} from 'react'
import "../../Styles/dist-css/Status.css"
import BillStatus from './BillStatus/BillStatus'
import ExpenseStatus from './ExpenseStatus/ExpenseStatus'
import StatusGraph from './StatsGraph/StatusGraph'

export default function Status() {



    const [active, setActive] = useState ("FirstButton")

    return (
        <div className="status">
            <div className="option__status">
                <button onClick={() => setActive("FirstButton")} className="bills__status__btn">
                    Bills
                </button>
                <button onClick={() => setActive("SecondButton")} className="expenses__status__btn">
                    Expenses
                </button>
                <button onClick={() => setActive("ThirdButton")} className="status__btn">
                    Stats
                </button>
            </div>

            <div className="status__container">
                {active === "FirstButton" && <BillStatus />}
                {active === "SecondButton" && <ExpenseStatus />}
                {active === "ThirdButton" && <StatusGraph />}

            </div>

        </div>
    )
}
