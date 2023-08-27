import React, {useState} from 'react';
import style from "./AuthHeader.module.css";
import {NavLink} from "react-router-dom";
import { BurgerMenu } from '../../../Common/burgerMenu/BurgerMenu';

const AuthHeader = () => {
    /**
     хук для условного рендеринга иконки меню
     */
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
    /**
     * хук для условного рендеринга активного и неактивного мобильного меню
     */
    const [isActiveNav, setIsActiveNav] = useState<boolean>(false);
    /**
     * функции для данмического изменения внешнего вида и иконки мобильного меню
     */
    const handleClickMenu = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActiveNav(!isActiveNav)
    }
    const handleClickLink = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActiveNav(!isActiveNav)
    }
    return (
        <div className={style.container}>
            {
                /**
                 * условный рендеринг мобильного меню : свернутое и развернутое при клике по иконке меню
                 */
                isActiveNav ?
                    <nav className={style.mobileNavFul}>
                        <div className={style.mobileNavHeader}>
                            <h3>WattAttack</h3>
                            <BurgerMenu isFixedNav={false} isActiveMenu={isActiveMenu} handleClickMenu={handleClickMenu}/>
                        </div>
                        <NavLink to="/#howStart" onClick={handleClickLink}>КАК НАЧАТЬ</NavLink>
                        <NavLink to="/#routes" onClick={handleClickLink}>МАРШРУТЫ</NavLink>
                        <NavLink to="/#training" onClick={handleClickLink}>ТРЕНИРОВКИ</NavLink>
                        <NavLink to="/#about" onClick={handleClickLink}>О НАС</NavLink>
                        <NavLink to="/#help" onClick={handleClickLink}>ПОМОЩЬ</NavLink>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>

                    </nav>
                    :
                    <nav className={style.mobileNavPart}>
                        <NavLink to={"/#howStart"}>КАК НАЧАТЬ</NavLink>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                        <BurgerMenu isFixedNav={true} isActiveMenu={isActiveMenu} handleClickMenu={handleClickMenu}/>
                       
                    </nav>
            }
            {/**
             * Меню для десктопных устройств, отображается пока не заработает медиа запрос
             */}
            <nav className={style.navbar} id={style.home}>
                <div className={style.wrapper}>
                    <NavLink to="/#howStart" onClick={handleClickLink}>КАК НАЧАТЬ</NavLink>
                    <NavLink to="/#routes" onClick={handleClickLink}>МАРШРУТЫ</NavLink>
                    <NavLink to="/#training" onClick={handleClickLink}>ТРЕНИРОВКИ</NavLink>
                    <NavLink to="/#about" onClick={handleClickLink}>О НАС</NavLink>
                    <NavLink to="/#help" onClick={handleClickLink}>HELP</NavLink>
                    <NavLink to={"/login"}>LOGIN</NavLink>
                    <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                </div>
            </nav>

        </div>
    );
};


export default AuthHeader;