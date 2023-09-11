import { useEffect, useState } from "react";
import { ratesDataType } from "../About/About";
import style from "./Rates.module.css";
import RatesItem from "./ratesItem/RatesItem";

type RatesPropsType = {
    ratesData : Array<ratesDataType>
} 

const Rates = (props : RatesPropsType) => {

    return (
        <div className={style.rates}>
                <div className={style.rates_wrapper}>
                     <span className={style.rates_title}>
                     ТАРИФЫ
                     </span>
                   
                     <div className={style.rates_itemsContainer}>
                        {
                            props.ratesData ? 
                            props.ratesData.map((r,index) => {
                                return (
                                    <RatesItem ratesData={r} key={r.title} index={index}/>
                                )
                            })
                            :
                            ""
                        }
                     </div>

                    
                </div>
            </div>
    )
}

export default Rates;