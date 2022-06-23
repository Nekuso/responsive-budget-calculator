import React from 'react';
import BillStats from './BillStats'
import ExpenseStats from './ExpenseStats'
import '../../../Styles/dist-css/StatusGraph.css'

const StatusGraph = () => {
    return (
        <div className="status__graph__container">
            <BillStats></BillStats>
            <ExpenseStats></ExpenseStats>
        </div>
    );
}

export default StatusGraph;