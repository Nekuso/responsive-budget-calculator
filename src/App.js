import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./components/Dashboard/Dashboard"
import Status from "./components/Status/Status"
import "./Styles/dist-css/App.css"
import { AppProvider } from './context/AppContext';

const App = () => {


    return (
        <AppProvider>
            
        <div className="app">
            <Navbar />
            <div className="wrapper">
                <Dashboard />
                <Status />
            </div>
            
        </div>
        </AppProvider>
    );
}

export default App;
