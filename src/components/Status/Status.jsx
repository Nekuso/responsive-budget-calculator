import React from 'react'
import "../../Styles/dist-css/Status.css"

export default function Status() {
    return (
        <div className="status__container">
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

            <div className="status">

            </div>

            <div className="total__container">
                <h2 className="total__text">Total</h2>
                <h2 className="total">$138.00</h2>

            </div>

        </div>
    )
}
