import React, {useContext} from 'react';
import BillList from '../BillList/BillList';
import { AppContext } from '../../../context/AppContext';


const BillStatus = () => {
    const {bills} = useContext(AppContext);


    const totalBills = bills.reduce((total, item) =>{
        return (total += item.cost)
    }, 0);

    return (
        <div className="bill__status">
            <ul className="status__container">
                <BillList/>
            </ul>

            <div className="total__container">
                <h2 className="total__text">Total</h2>
                <h2 className="total">${totalBills}</h2>
            </div>
        </div>
    );
}

export default BillStatus;
