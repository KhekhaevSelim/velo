import React from "react"
import style from "./BurgerMenu.module.css";
import closeIcon from "../../../assets/icons/blackCloseIcon.svg"
type BurgerMenuPropsType = {
    isActiveMenu : boolean
    handleClickMenu : () => void
    isFixedNav : boolean
}
export const BurgerMenu = (props : BurgerMenuPropsType ) => {
    return (
       props.isActiveMenu ? 
       <span onClick={()=>props.handleClickMenu()} className={style.closeIcon}>
        <img src={closeIcon} alt="close icon" className={style.closeIcon}/>
       </span>
       :
        <div className={style.burgerMenuContainer} onClick={()=>props.handleClickMenu()}>
            <div className={props.isFixedNav ? style.blackLine : style.burgerMenuLine }></div>
            <div className={props.isFixedNav ? style.blackLine : style.burgerMenuLine }></div>
            <div className={props.isFixedNav ? style.blackLine : style.burgerMenuLine }></div>
        </div>
    )
}