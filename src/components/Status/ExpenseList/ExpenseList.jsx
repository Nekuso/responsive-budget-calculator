import React, {useContext} from 'react';
import ExpenseItem from "./ExpenseItem";
import { AppContext } from '../../../context/AppContext';

const ExpenseList = () => {

    const {expenses} = useContext(AppContext);


    return (
        <ul className="status">
            {expenses.map(((expenses) =>(
                <ExpenseItem 
                id={expenses.id} 
                type={expenses.type} 
                name={expenses.name} 
                cost={expenses.cost}/>
            )))}
        </ul>
    );
}

export default ExpenseList;
