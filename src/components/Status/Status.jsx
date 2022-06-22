import React from 'react'
import "../../Styles/dist-css/Status.css"
import BillList from "../Status/BillList/BillList"

export default function Status() {
    return (
        <div className="status__button__container">
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

            <ul className="status__container">
                <BillList/>
            </ul>

            <div className="total__container">
                <h2 className="total__text">Total</h2>
                <h2 className="total">$138.00</h2>

            </div>

        </div>
    )
}
