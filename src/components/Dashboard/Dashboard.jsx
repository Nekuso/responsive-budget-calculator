import React, {useState, useContext}from 'react';
import Popup from '../Popup/Popup';
import "../../Styles/dist-css/Dashboard.css"
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';




const Dashboard = (props) => {

    const popup = document.querySelector("popup")


    const {balance, bills, expenses, userName, dispatch}  = useContext(AppContext);

    const totalSpentBills = bills.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)
    
    const totalSpentExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    

    const [balanceValue,setBalanceValue] = useState(props.balance)
    const [nameValue,setUserName] = useState(props.userName)

    const[type,setType] = useState("");
    const[name,setName] = useState("");
    const[cost,setCost] = useState(0);

    const [addNameButtonPopup, setAddNameButtonPopup] = useState(true);
    const [updateBalanceButtonPopup, setUpdateBalanceButtonPopup] = useState(false);
    const [addBillButtonPopup, setaddBillButtonPopup] = useState(false);
    const [addExpenseButtonPopup, setaddExpenseButtonPopup] = useState(false);



    const onAddName = (event) => {
        event.preventDefault();
        dispatch({
			type: 'SET_USERNAME',
			payload: nameValue,
		});

        setUserName("")
        setAddNameButtonPopup(false)
    }
    const onUpdateBalance = (event) => {
        event.preventDefault();
        dispatch({
			type: 'SET_BALANCE',
			payload: balanceValue,
		});

        setBalanceValue("")
        setUpdateBalanceButtonPopup(false)
    }
    const onAddBillSubmit = (event) => {
        event.preventDefault();

        const bills = {
            id: uuidv4(),
            type: type,
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_BILL',
            payload: bills
        })

        setName("")
        setCost("")
        setaddBillButtonPopup(false)
    }
    const onAddExpenseSubmit = (event) => {
        event.preventDefault();

        const expenses = {
            id: uuidv4(),
            type: type,
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenses
        })

        setName("")
        setCost("")
        setaddExpenseButtonPopup(false)
    }

    return (
        <div className="dashboard">
            
            <div className="dashboard__infos">

                <div className="balance__container">
                    <div className="name__container">
                        <h2 className="name">{userName}</h2>
                        <img src="img/money.png" />
                    </div>
                    <div className="balance__text">
                        <p>Budget</p>
                        <h2 className="balance">${balance}</h2>
                    </div>
                </div>

                <div className="spent__container">
                    <p>Spent so far</p>
                    <h3 className="spent">${totalSpentBills + totalSpentExpenses}</h3>
                </div>

                <div className="remaining__container">
                    <p>Remaining</p>
                    <h3 className="remaining">${balance - (totalSpentBills + totalSpentExpenses)}</h3>
                </div>
            </div>

            <div className="update__buttons">
                <button onClick={
                    () => {
                        setTimeout(() =>{
                            setUpdateBalanceButtonPopup(true)
                        },300)

                        setTimeout(() =>{
                            popup.classList.add("show")
                        },800)
                    }
                }
                    className="update__balance">
                    <i class='bx bx-credit-card-front'></i>
                    Update Budget
                </button>
            </div>

            <div className="add__buttons">
                <button onClick={
                    () => {
                        setTimeout(() =>{
                            setaddBillButtonPopup(true)
                        },300)
                        
                        setTimeout(() =>{
                            popup.classList.add("show")
                        },800)
                    }
                    
                }
                    
                    className="add__bill">
                    <i class='bx bxs-add-to-queue' ></i>
                    Add Bill
                </button>
                <button onClick={
                    () => {
                        setTimeout(() =>{
                            setaddExpenseButtonPopup(true)
                        },300)

                        setTimeout(() =>{
                            popup.classList.add("show")
                        },800)
                    }    
                
                }
                className="add__expense">
                    <i class='bx bxs-cart-add'></i>
                    Add expense
                </button>

            </div>

            <Popup trigger={addNameButtonPopup} setTrigger={setAddNameButtonPopup}>
                <h2>What's your Name?</h2>

                <form onSubmit={onAddName} className="update__input__container">
                    <div className="input__container">
                        <i class='bx bx-user-circle'></i>
                        <input 
                        onChange={(event) => setUserName (event.target.value)}
                        value={nameValue}
                        type="text" 
                        placeholder="New Name"
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>

            </Popup>

            <Popup trigger={updateBalanceButtonPopup} setTrigger={setUpdateBalanceButtonPopup}>
                <h2>Update Budget</h2>

                <form onSubmit={onUpdateBalance} className="update__input__container">
                    <div className="input__container">
                        <i class='bx bx-dollar-circle'></i>
                        <input 
                        onChange={(event) => setBalanceValue (event.target.value)}
                        value={balanceValue}
                        type="text" 
                        placeholder="New Budget"
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>

            </Popup>

            <Popup trigger={addBillButtonPopup} setTrigger={setaddBillButtonPopup}>
                <h2>Add Bill</h2>
                <div className="add__container">
                    <form onSubmit={onAddBillSubmit} className="add__input__container">

                        <label htmlFor="">Type</label>
                        <select 
                        value={type} 
                        required="required" 
                        className="select__Type" 
                        name="categories"
                        id=""
                            onChange={(event) => setType (event.target.value)}
                            >

                            <option value="img/electricity_Icon.png">
                                <p>Electricity</p>
                            </option>
                            <option value="img/water_Icon.png">
                                <p>Water</p>
                            </option>
                            <option value="img/wifi_Icon.png">
                                <p>Wifi</p>
                            </option>
                            <option value="img/netflix_Icon.png">
                                <p>Netflix</p>
                            </option>
                            <option value="img/electricity_Icon.png">
                                <p>Phone Bill</p>
                            </option>
                            <option value="img/electricity_Icon.png">
                                <p>Debt</p>
                            </option>
                            <option value="img/electricity_Icon.png">
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
                    <form onSubmit={onAddExpenseSubmit} className="add__input__container">

                        <label htmlFor="">Type</label>
                        <select 
                        value={type} 
                        required="required" 
                        className="select__Type" 
                        name="categories"
                        id=""
                        onChange={(event) => setType (event.target.value)}
                        >

                            <option value="img/electricity_Icon.png">
                                <p>Electricity</p>
                            </option>
                            <option value="img/water_Icon.png">
                                <p>Water</p>
                            </option>
                            <option value="img/wifi_Icon.png">
                                <p>Wifi</p>
                            </option>
                            <option value="img/netflix_Icon.png">
                                <p>Netflix</p>
                            </option>
                            <option value="img/electricity_Icon.png">
                                <p>Phone Bill</p>
                            </option>
                            <option value="img/electricity_Icon.png">
                                <p>Debt</p>
                            </option>
                            <option value="img/electricity_Icon.png">
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

        </div>
    );
}

export default Dashboard;
