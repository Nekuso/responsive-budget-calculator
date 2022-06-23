import React, {useState, useContext}from 'react';
import Popup from '../Popup/Popup';
import "../../Styles/dist-css/Dashboard.css"
import { AppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';



const Dashboard = (props) => {


    const {balance,dispatch}  = useContext(AppContext);
    const {income}  = useContext(AppContext);

    const [balanceValue,setBalanceValue] = useState(props.balance)
    const [incomeValue,setIncomeValue] = useState(props.income)

    const[type,setType] = useState("");
    const[name,setName] = useState("");
    const[cost,setCost] = useState(0);

    const [updateBalanceButtonPopup, setUpdateBalanceButtonPopup] = useState(false);
    const [updateIncomeButtonPopup, setUpdateIncomeButtonPopup] = useState(false);
    const [addBillButtonPopup, setaddBillButtonPopup] = useState(false);
    const [addExpenseButtonPopup, setaddExpenseButtonPopup] = useState(false);


    const onUpdateBalance = (event) => {
        event.preventDefault();
        dispatch({
			type: 'SET_BALANCE',
			payload: balanceValue,
		});

        setBalanceValue("")
        setUpdateBalanceButtonPopup(false)
    }

    const onUpdateIncome = (event) => {
        event.preventDefault();
        dispatch({
			type: 'SET_INCOME',
			payload: incomeValue,
		});
        setUpdateIncomeButtonPopup(false)
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
            type: 'ADD_EXPENSE',
            payload: bills
        })

        setName("")
        setCost("")
        setaddBillButtonPopup(false)
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
                <h3 className="income">${income}</h3>
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

                <form onSubmit={onUpdateBalance} className="update__input__container">
                    <div className="input__container">
                        <i class='bx bx-dollar-circle'></i>
                        <input 
                        onChange={(event) => setBalanceValue (event.target.value)}
                        value={balanceValue}
                        type="text" 
                        placeholder="New Balance"
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>

            </Popup>

            <Popup trigger={updateIncomeButtonPopup} setTrigger={setUpdateIncomeButtonPopup}>
                <h2>Update Income</h2>

                <form onSubmit={onUpdateIncome}  className="update__input__container">
                    <div className="input__container">
                        <i class='bx bx-dollar-circle'></i>
                        <input 
                        type="text" 
                        onChange={(event) => setIncomeValue (event.target.value)}
                        placeholder="New Income" />
                    </div>
                    <button type="submit" >Update</button>
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
