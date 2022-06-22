import React from 'react';

const BillItem = (props) => {
    return (
        <div>
            <li className="bill__item">
                <div className="icon__text">
                <img src={props.type} alt="" />
                {props.name}
                </div>
                <span>${props.cost}
                <i className='bx bxs-x-square close__btn'></i>
                </span>

            </li>
        </div>
    );
}

export default BillItem;
