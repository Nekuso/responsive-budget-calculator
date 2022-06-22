import React, {useContext} from 'react';
import { AppContext } from '../../../context/AppContext';

const BillItem = (props) => {

    const {dispatch} = useContext(AppContext);

    const handleDeleteBill = () => {
        dispatch ({
            type: 'DELETE_BILL',
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
                <i onClick={handleDeleteBill} className='bx bxs-x-square close__btn'></i>
                </span>

            </li>
        </div>
    );
}

export default BillItem;
