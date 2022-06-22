import React from 'react'
import "../../Styles/dist-css/Status.css"
import BillStatus from './BillStatus/BillStatus'

export default function Status() {
    return (
        <div className="status">
            <div className="option__status">
                <button className="bills__status__btn">
                    Bills
                </button>
                <button className="expenses__status__btn">
                    Expenses
                </button>
                <button className="status__btn">
                    Stats
                </button>
            </div>

            <BillStatus />

        </div>
    )
}
