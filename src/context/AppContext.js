import {createContext, useReducer} from 'react'

const AppReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const initialState = {
    balance: 400,
    bills: [
        {id: 134124234, type: "img/electricity.png", name: "Electricity", cost: 105},
        {id: 134124235, type: "/img/electricity.png", name: "Water", cost: 85},
        {id: 134124236, type: "/img/electricity.png", name: "Debt", cost: 15},
        {id: 134124237, type: "/img/electricity.png", name: "Housing", cost: 17}
    ],
};

export const AppContext  = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value= {{
        balance: state.balance,
        bills: state.bills,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}