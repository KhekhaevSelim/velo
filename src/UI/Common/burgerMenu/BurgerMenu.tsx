import React from "react"
import style from "./BurgerMenu.module.css";

type BurgerMenuPropsType = {
    isActiveMenu : boolean
    handleClickMenu : () => void
}
export const BurgerMenu = (props : BurgerMenuPropsType ) => {
    return (
       props.isActiveMenu ? 
       <span onClick={()=>props.handleClickMenu()} className={style.closeIcon}>
        +
       </span>
       :
        <div className={style.burgerMenuContainer} onClick={()=>props.handleClickMenu()}>
            <div className={style.burgerMenuLine }></div>
            <div className={style.burgerMenuLine}></div>
            <div className={style.burgerMenuLine}></div>
        </div>
    )
}