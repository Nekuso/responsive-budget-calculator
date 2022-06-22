import React, {useContext} from 'react';
import BillItem from "./BillItem"
import { AppContext } from '../../../context/AppContext';

const BillList = () => {

    const {bills} = useContext(AppContext);


    return (
        <ul className="status">
            {bills.map(((bills) =>(
                <BillItem 
                id={bills.id} 
                type={bills.type} 
                name={bills.name} 
                cost={bills.cost}/>
            )))}
        </ul>
    );
}

export default BillList;
