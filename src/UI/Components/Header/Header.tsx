import React, {useEffect, useState} from 'react';
import style from './Header.module.css';
import {NavLink, useLocation} from "react-router-dom";
import bg from "../../../assets/image/bg-image-1.png"
import { BurgerMenu } from '../../Common/burgerMenu/BurgerMenu';

type HeaderPropsType = {
    yPos : number
}

function Header(props : HeaderPropsType) {
    /**
     хук для условного рендеринга иконки меню
     */
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
    /**
     * хук для условного рендеринга активного и неактивного мобильного меню
     */
    const [isActiveNav, setIsActiveNav] = useState<boolean>(false);

    /**
     * функции для данмического изменения внешнего вида и иконки мобильного меню  + блокировки скролла
     */
    const handleClickMenu = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActiveNav(!isActiveNav)
    }
    const handleClickLink = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActiveNav(!isActiveNav)
    }
    /**
     * хук для блокировки и разблокировки скролла при активном мобильном меню
     */
    useEffect(() => {
        if (isActiveNav) {
            document.documentElement.classList.add("no-scroll");
        } else {
            document.documentElement.classList.remove("no-scroll");
        }
    }, [isActiveNav]);

    /**
     * комбинация из двух хуков для автоматического скролла до нужного раздела из компонента логинизации/регистрации/восстановления пароля
     */
    const location = useLocation();

    useEffect(() => {
        const section = document.getElementById(location.hash.slice(1,location.hash.length));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);

    return (
        <div className={style.wrapper2}>
        <header className={style.home}>
           
            <div className={style.homeImg}>
                {/*<img src={bg} alt=""/>*/}
            </div>
           
            
            {
                /**
                 * условный рендеринг мобильного меню : свернутое и развернутое при клике по иконке меню
                 */
                isActiveNav ?
                    <nav className={style.mobileNavFul}>
                        <div className={style.mobileNavHeader}>
                            <h3>WattAttack</h3>
                            {/* <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon}
                               onClick={handleClickMenu}></i> */}
                               <BurgerMenu isFixedNav={false} isActiveMenu={isActiveMenu} handleClickMenu={handleClickMenu}/>
                        </div>
                        <a href="#howStart" onClick={handleClickLink}>КАК НАЧАТЬ</a>
                        <a href="#routes" onClick={handleClickLink}>МАРШРУТЫ</a>
                        <a href="#training" onClick={handleClickLink}>ТРЕНИРОВКИ</a>
                        <a href="#about" onClick={handleClickLink}>О НАС</a>
                        <a href="#help" onClick={handleClickLink}>ПОМОЩЬ</a>
                        <a href="#plan" onClick={handleClickLink}>ТАРИФЫ</a>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>

                    </nav>
                    :
                   
                    <nav className={style.mobileNavPart}>
                        <a href="#howStart">КАК НАЧАТЬ</a>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                        {/* <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon}
                           onClick={handleClickMenu}></i> */}
                           <BurgerMenu isFixedNav={false} isActiveMenu={isActiveMenu} handleClickMenu={handleClickMenu}/>
                    </nav>
                
            }
                    {
                        props.yPos > 99 && !isActiveMenu ?
                    <div className={style.mobileNavPartFixWrapper}>
                        <nav className={style.mobileNavPartFix}>
                          <a href="#howStart">КАК НАЧАТЬ</a>
                          <NavLink to={"/login"}>ВОЙТИ</NavLink>
                          <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                          {/* <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon}
                             onClick={handleClickMenu}></i> */}
                             <BurgerMenu isFixedNav={true} isActiveMenu={isActiveMenu} handleClickMenu={handleClickMenu}/>
                        </nav>
                    </div>
                    :
                    null
                        }
            {/**
            * Меню для десктопных устройств, отображается пока не заработает медиа запрос
            */}
            <nav className={style.navbar} id={style.home}>
                <div className={style.wrapper}>
                    <a href="#howStart">КАК НАЧАТЬ</a>
                    <a href="#routes">МАРШРУТЫ</a>
                    <a href="#training">ТРЕНИРОВКИ</a>
                    <a href="#about">О НАС</a>
                    <a href="#help">ПОМОЩЬ</a>
                    <a href="#plan">ТАРИФЫ</a>
                    <NavLink to={"/login"}>ВОЙТИ</NavLink>
                    <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                </div>
            </nav>
            {
                props.yPos > 99 ?

            <nav className={style.navbarFix}>
                <div className={style.wrapperFix}>
                    <a href="#howStart">КАК НАЧАТЬ</a>
                    <a href="#routes">МАРШРУТЫ</a>
                    <a href="#training">ТРЕНИРОВКИ</a>
                    <a href="#about">О НАС</a>
                    <a href="#help">ПОМОЩЬ</a>
                    <a href="#plan">ТАРИФЫ</a>
                    <NavLink to={"/login"}>ВОЙТИ</NavLink>
                    <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                </div>
            </nav>
            :
            null
            }
            
            <div className={style.heading}>
                <h1>WattAttack</h1>
                <p>результаты превзойдут ваши ожидания</p>
                <button className={style.btn}>ПОГНАЛИ!</button>
            </div>

        </header>
        </div>

    );
}

export default Header;