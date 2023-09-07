import { ratesDataType } from "../../About/About";
import style from "./RatesItem.module.css";
type RatesItemPropsType = {
    ratesData : ratesDataType
    index : number
} 

const RatesItem = (props : RatesItemPropsType) => {
    return (
       
        props.ratesData.disabled ?

        <div className={style.rates__itemsContainer__itemDisabled} style={{marginRight : props.index === 2 || props.index === 5 ? "0" : "30px", height : props.index > 2 ? "305px" : "287px"}}>
            <span className={style.item_titleDisabled}>
                {props.ratesData.title}
            </span>
            <span className={style.item_descriptionDisabled}>
            {props.ratesData.decsription}
            </span>
            <button className={style.item_btnDisabled}>
                ПРИОБРЕСТИ
            </button>
        </div>

        :

        <div className={style.rates__itemsContainer__item} style={{marginRight : props.index === 2 || props.index === 5 ? "0" : "30px", height : props.index > 2 ? "305px" : "287px"}}>
            <span className={style.item_title}>
                {props.ratesData.title}
            </span>
            <span className={style.item_price}>
            {props.ratesData.price}
            </span>
            <span className={style.item_description}>
            {props.ratesData.decsription}
            </span>
            <button className={style.item_btn}>
                ПРИОБРЕСТИ
            </button>
        </div>
    )
}

export default RatesItem;