import React, {useContext} from 'react';
import { AppContext2 } from '../../../context/AppContext2';

const ExpenseItem = (props) => {

    const {dispatch} = useContext(AppContext2);

    const handleDeleteExpense = () => {
        dispatch ({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    }

    return (
        <div>
            <li className="bill__item">
                <div className="icon__text">
                <img src={props.type} alt="" />
                {props.name}
                </div>
                <span>${props.cost}
                <i onClick={handleDeleteExpense} className='bx bxs-x-square close__btn'></i>
                </span>

            </li>
        </div>
    );
}

export default ExpenseItem;
