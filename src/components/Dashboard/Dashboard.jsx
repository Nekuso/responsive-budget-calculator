import React, {useState}from 'react';
import UpdateBalancePopup from '../Popup/UpdateBalancePopup';
import "../../Styles/dist-css/Dashboard.css"

const Dashboard = () => {

    const [buttonPopup, setbuttonPopup] = useState(false);


    return (
        <div className="dashboard">
            
            <div className="balance__container">
                <div className="name__container">
                    <h2 className="name">Logan Grace</h2>
                    <img src="img/money.png" />
                </div>
                <div className="balance__text">
                    <p>Balance</p>
                    <h2 className="balance">$145.00</h2>
                </div>
            </div>

            <div className="income__container">
                <p>Income</p>
                <h3 className="income">$114.00</h3>
            </div>

            <div className="update__buttons">
                <button onClick={() => setbuttonPopup(true)} className="update__balance">
                    <i class='bx bx-credit-card-front'></i>
                    Update Balance
                </button>
                <button className="update__income">
                    <i class='bx bx-money-withdraw'></i>
                    Update Income
                </button>
            </div>

            <div className="add__buttons">
                <button className="add__bill">
                    <i class='bx bxs-add-to-queue' ></i>
                    Add Bill
                </button>
                <button className="add__expense">
                    <i class='bx bxs-cart-add'></i>
                    Add expense
                </button>

            </div>

            <UpdateBalancePopup trigger={buttonPopup} setTrigger={setbuttonPopup}>
                <h2>Update Balance</h2>
            </UpdateBalancePopup>

        </div>
    );
}

export default Dashboard;
