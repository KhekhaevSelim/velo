import React from 'react';
import './App.css';
import Header from "./UI/Components/Header/Header";
import HowStart from "./UI/Components/HowStart/HowStart";
import Training from "./UI/Components/Training/Training";
import Competitions from "./UI/Components/Competitions/Competitions";
import About from "./UI/Components/About/About";
import Help from "./UI/Components/Help/Help";
import SendQuestion from "./UI/Components/SendQuestion/SendQuestion";
import Footer from "./UI/Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <HowStart/>
            <Training/>
            <Competitions/>
            <About/>
            <Help/>
            <SendQuestion/>
            <Footer/>
        </div>
    );
}

export default App;
