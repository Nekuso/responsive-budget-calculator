import {createContext, useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid'


// 5. The reduceer - this is used to update the state, based on the action
const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                bills: [...state.bills, action.payload],
            };
        case 'DELETE_BILL':
            return {
                ...state,
                bills: state.bills.filter(
                    (bill) => bill.id !== action.payload
                    ),
            };
        case 'SET_BALANCE':
            return {
                ...state,
                balance: action.payload,
            }
        case 'SET_INCOME':
            return {
                ...state,
                income: action.payload,
            }
        default:
            return state;
    }
}

// 1. Sets the initial state for Bills when the app loads
const initialState = {
    balance: 0,
    income: 0,
    bills: [
        {id: uuidv4(), type: "img/electricity_Icon.png", name: "Electricity", cost: 105},
        {id: uuidv4(), type: "img/water_Icon.png", name: "Water", cost: 85},
        {id: uuidv4(), type: "img/netflix_Icon.png", name: "Netflix", cost: 15},
        {id: uuidv4(), type: "img/electricity_Icon.png", name: "Housing", cost: 17}
    ],
};


// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext  = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // 5. Returns our context. Pass in the values we want to expose
    return(<AppContext.Provider value= {{
        balance: state.balance,
        income: state.income,
        bills: state.bills,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}