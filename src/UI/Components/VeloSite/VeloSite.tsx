import React from 'react';
import Header from "../Header/Header";
import HowStart from "../HowStart/HowStart";
import Training from "../Training/Training";
import Competitions from "../Competitions/Competitions";
import About from "../About/About";
import Help from "../Help/Help";
import SendQuestion from "../SendQuestion/SendQuestion";
import Footer from "../Footer/Footer";

const VeloSite = () => {
    return (
        <div>
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
};

export default VeloSite;