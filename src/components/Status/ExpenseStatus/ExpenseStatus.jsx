import React, {useContext} from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import { AppContext } from '../../../context/AppContext';


const ExpenseStatus = () => {
    const {expenses} = useContext(AppContext);


    const totalExpenses = expenses.reduce((total, item) =>{
        return (total += item.cost)
    }, 0);

    return (
        <div className="expense__status">
            <ul className="status__container">
                <ExpenseList/>
            </ul>

            <div className="total__container">
                <h2 className="total__text">Total</h2>
                <h2 className="total">${totalExpenses}</h2>
            </div>
        </div>
    );
}

export default ExpenseStatus;
