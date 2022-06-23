import React, {useContext} from 'react';
import ExpenseItem from "./ExpenseItem";
import { AppContext2 } from '../../../context/AppContext2';

const ExpenseList = () => {

    const {expenses} = useContext(AppContext2);


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
