import {createContext, useReducer} from 'react'

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
        default:
            return state;
    }
}

const initialState = {
    balance: 400,
    income: 114,
    bills: [
        {id: 134124234, type: "img/electricity_Icon.png", name: "Electricity", cost: 105},
        {id: 134124235, type: "img/water_Icon.png", name: "Water", cost: 85},
        {id: 134124236, type: "img/netflix_Icon.png", name: "Netflix", cost: 15},
        {id: 134124237, type: "img/electricity_Icon.png", name: "Housing", cost: 17}
    ],
};

export const AppContext  = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value= {{
        balance: state.balance,
        income: state.income,
        bills: state.bills,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}