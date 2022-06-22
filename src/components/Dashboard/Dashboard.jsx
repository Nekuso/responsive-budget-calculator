import React, {useState, useContext}from 'react';
import Popup from '../Popup/Popup';
import "../../Styles/dist-css/Dashboard.css"
import { AppContext } from '../../context/AppContext';

const Dashboard = (props) => {

    const {balance}  = useContext(AppContext);

    const[type,setType] = useState("");
    const[name,setName] = useState("");
    const[cost,setCost] = useState(0);


    const [updateBalanceButtonPopup, setUpdateBalanceButtonPopup] = useState(false);
    const [updateIncomeButtonPopup, setUpdateIncomeButtonPopup] = useState(false);
    const [addBillButtonPopup, setaddBillButtonPopup] = useState(false);
    const [addExpenseButtonPopup, setaddExpenseButtonPopup] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        alert("name: " + name + "\n" + "cost: " + cost)
    }


    return (
        <div className="dashboard">
            
            <div className="balance__container">
                <div className="name__container">
                    <h2 className="name">Logan Grace</h2>
                    <img src="img/money.png" />
                </div>
                <div className="balance__text">
                    <p>Balance</p>
                    <h2 className="balance">${balance}</h2>
                </div>
            </div>

            <div className="income__container">
                <p>Income</p>
                <h3 className="income">$114.00</h3>
            </div>

            <div className="update__buttons">
                <button onClick={() => setUpdateBalanceButtonPopup(true)} className="update__balance">
                    <i class='bx bx-credit-card-front'></i>
                    Update Balance
                </button>
                <button onClick={() => setUpdateIncomeButtonPopup(true)} className="update__income">
                    <i class='bx bx-money-withdraw'></i>
                    Update Income
                </button>
            </div>

            <div className="add__buttons">
                <button onClick={() => setaddBillButtonPopup(true)} className="add__bill">
                    <i class='bx bxs-add-to-queue' ></i>
                    Add Bill
                </button>
                <button onClick={() => setaddExpenseButtonPopup(true)} className="add__expense">
                    <i class='bx bxs-cart-add'></i>
                    Add expense
                </button>

            </div>

            <Popup trigger={updateBalanceButtonPopup} setTrigger={setUpdateBalanceButtonPopup}>
                <h2>Update Balance</h2>

                <div  className="update__input__container">
                    <div className="input__container">
                        <i class='bx bx-dollar-circle'></i>
                        <input type="text" placeholder="New Balance" />
                    </div>
                    <button>Update</button>
                </div>

            </Popup>

            <Popup trigger={updateIncomeButtonPopup} setTrigger={setUpdateIncomeButtonPopup}>
                <h2>Update Income</h2>

                <div  className="update__input__container">
                    <div className="input__container">
                        <i class='bx bx-dollar-circle'></i>
                        <input type="text" placeholder="New Income" />
                    </div>
                    <button>Update</button>
                </div>
            </Popup>

            <Popup trigger={addBillButtonPopup} setTrigger={setaddBillButtonPopup}>
                <h2>Add Bill</h2>
                <div className="add__container">
                    <form onSubmit={onSubmit} className="add__input__container">

                        <label htmlFor="">Type</label>
                        <select required="required" className="select__Type" name="categories" id="">
                            <option value="/img/electricity.png">
                                <p>Electricity</p>
                            </option>
                            <option value="/img/water.png">
                                <p>Water</p>
                            </option>
                            <option value="/img/wifi_Icon.png">
                                <p>Wifi</p>
                            </option>
                            <option value="/img/netflix.png">
                                <p>Netflix</p>
                            </option>
                            <option value="/img/electricity.png">
                                <p>Phone Bill</p>
                            </option>
                            <option value="/img/electricity.png">
                                <p>Debt</p>
                            </option>
                            <option value="/img/electricity.png">
                                <p>Other</p>
                            </option>
                        </select>

                        <label htmlFor="">Name</label>
                        <input 
                        value={name} 
                        required="required" 
                        type="text" 
                        placeholder="Enter name" 
                        onChange={(event) => setName (event.target.value)}
                        />

                        <label htmlFor="">Amount</label>
                        <input 
                        value={cost} 
                        required="required" 
                        type="text" 
                        placeholder="Enter amount"
                        onChange={(event) => setCost (event.target.value)}
                        
                        />

                        <button
                        type="submit">Add</button>
                    </form>
                </div>
            </Popup>

            <Popup trigger={addExpenseButtonPopup} setTrigger={setaddExpenseButtonPopup}>
                <h2>Add Expense</h2>
                <div className="add__container">
                    <form className="add__input__container">

                        <label htmlFor="">Type</label>
                        <select className="select__Type" name="categories" id="">
                            <option value="/img/electricity.png">
                                <p>Electricity</p>
                            </option>
                            <option value="/img/water.png">
                                <p>Water</p>
                            </option>
                            <option value="/img/wifi_Icon.png">
                                <p>Wifi</p>
                            </option>
                            <option value="/img/netflix.png">
                                <p>Netflix</p>
                            </option>
                            <option value="/img/electricity.png">
                                <p>Phone Bill</p>
                            </option>
                            <option value="/img/electricity.png">
                                <p>Debt</p>
                            </option>
                            <option value="/img/electricity.png">
                                <p>Other</p>
                            </option>
                        </select>

                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter name" />

                        <label htmlFor="">Amount</label>
                        <input type="text" placeholder="Enter amount" />

                    </form>
                    <button>Add</button>
                </div>
            </Popup>

        </div>
    );
}

export default Dashboard;
