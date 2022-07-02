import React, {useState, useContext}from 'react';
import Popup from '../Popup/Popup';
import "../../Styles/dist-css/Dashboard.css"
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';



const Dashboard = (props) => {

    const popup = document.querySelector("popup")

    function play() {
        var audio = new Audio("sound/click.mp3")
        audio.play()
    }

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
        
        play()
        setUserName("")
        setAddNameButtonPopup(false)
    }
    const onUpdateBalance = (event) => {
        event.preventDefault();
        dispatch({
			type: 'SET_BALANCE',
			payload: balanceValue,
		});

        play()
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

        play()
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
        
        play()
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
                        <img src="img/unicorn.png" />
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
                        play()
                        setTimeout(() =>{
                            setUpdateBalanceButtonPopup(true)
                        },300)

                        setTimeout(() =>{
                            popup.classList.add("show")
                        },800)
                    }
                }
                    className="update__balance">
                    <i className='bx bx-credit-card-front'></i>
                    Update Budget
                </button>
            </div>

            <div className="add__buttons">
                <button onClick={
                    () => {
                        play()
                        setTimeout(() =>{
                            setaddBillButtonPopup(true)
                        },300)
                        
                        setTimeout(() =>{
                            popup.classList.add("show")
                        },800)
                    }
                    
                }
                    
                    className="add__bill">
                    <i className='bx bxs-add-to-queue' ></i>
                    Add Bill
                </button>
                <button onClick={
                    () => {
                        play()
                        setTimeout(() =>{
                            setaddExpenseButtonPopup(true)
                        },300)

                        setTimeout(() =>{
                            popup.classList.add("show")
                        },800)
                    }    
                
                }
                className="add__expense">
                    <i className='bx bxs-cart-add'></i>
                    Add expense
                </button>

            </div>

            <Popup trigger={addNameButtonPopup} setTrigger={setAddNameButtonPopup}>
                <h2>What's your Name?</h2>

                <form onSubmit={onAddName} className="update__input__container">
                    <div className="input__container">
                        <i className='bx bx-user-circle'></i>
                        <input 
                        required="required" 
                        onChange={(event) => {
                            play()
                            setUserName (event.target.value)}}
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
                        <i className='bx bx-dollar-circle'></i>
                        <input 
                        required="required" 
                        onChange={(event) => {
                            play()
                            setBalanceValue (event.target.value)}}
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
                            <option value="img/phone_bill_Icon.png">
                                <p>Phone Bill</p>
                            </option>
                            <option value="img/tuition_Icon.png">
                                <p>Tuition</p>
                            </option>
                            <option value="img/insurance_Icon.png">
                                <p>Insurance</p>
                            </option>
                            <option value="img/rent_Icon.png">
                                <p>Rent</p>
                            </option>
                            <option value="img/depth_Icon.png">
                                <p>Debt</p>
                            </option>
                            <option value="img/other_Icon.png">
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

                            <option value="img/food_Icon.png">
                                <p>Food</p>
                            </option>
                            <option value="img/snacks_Icon.png">
                                <p>Snack</p>
                            </option>
                            <option value="img/savings_Icon.png">
                                <p>Savings</p>
                            </option>
                            <option value="img/movies_Icon.png">
                                <p>Movies</p>
                            </option>
                            <option value="img/transportation_Icon.png">
                                <p>Transportation</p>
                            </option>
                            <option value="img/membership_Icon.png">
                                <p>Membership</p>
                            </option>
                            <option value="img/gas_Icon.png">
                                <p>Gas</p>
                            </option>
                            <option value="img/utilities_Icon.png">
                                <p>Utilities</p>
                            </option>
                            <option value="img/beauty_Icon.png">
                                <p>Beauty</p>
                            </option>
                            <option value="img/gadgets_Icon.png">
                                <p>Gadget</p>
                            </option>
                            <option value="img/clothing_Icon.png">
                                <p>Clothing</p>
                            </option>
                            <option value="img/entertainment_Icon.png">
                                <p>Entertainment</p>
                            </option>
                            <option value="img/other_expense_Icon.png">
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
