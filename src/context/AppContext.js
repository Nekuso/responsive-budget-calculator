import {createContext, useEffect, useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid'


// 5. The reduceer - this is used to update the state, based on the action
const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BILL':
            return {
                ...state,
                bills: [...state.bills, action.payload],
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_BILL':
            return {
                ...state,
                bills: state.bills.filter(
                    (bill) => bill.id !== action.payload
                    ),
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                    ),
            };
        case 'SET_BALANCE':
            return {
                ...state,
                balance: action.payload,
            }
        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.payload,
            }
        default:
            return state;
    }
}

// 1. Sets the initial state for Bills when the app loads
const initialState = {
    userName: "",
    balance: 0,
    spent: 0,
    bills: [
        // {id: uuidv4(), type: "img/electricity_Icon.png", name: "Electricity", cost: 105},
        // {id: uuidv4(), type: "img/water_Icon.png", name: "Water", cost: 85},
        // {id: uuidv4(), type: "img/netflix_Icon.png", name: "Netflix", cost: 15},
        // {id: uuidv4(), type: "img/electricity_Icon.png", name: "Housing", cost: 17}
    ],
    expenses: [
        // {id: uuidv4(), type: "img/netflix_Icon.png", name: "Netflix", cost: 5},
        // {id: uuidv4(), type: "img/water_Icon.png", name: "Water", cost: 25},
        // {id: uuidv4(), type: "img/electricity_Icon.png", name: "Electricity", cost: 205},
        // {id: uuidv4(), type: "img/electricity_Icon.png", name: "Housing", cost: 87}
    ],
};


// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext  = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify({state, dispatch}))
    }, [state])
    
    // 5. Returns our context. Pass in the values we want to expose
    return(<AppContext.Provider value= {{
        userName: state.userName,
        balance: state.balance,
        spent: state.spent,
        bills: state.bills,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}