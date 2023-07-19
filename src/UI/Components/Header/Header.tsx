import React, {useEffect, useState} from 'react';
import style from'./Header.module.css';
import {NavLink} from "react-router-dom";
import bg from "../../../assets/image/bg-image-1.svg"

function Header() {
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
    const [isActiveNav, setIsActiveNav] = useState<boolean>(false);
    const handleClickMenu = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActiveNav(!isActiveNav)
        // document.body.classList.toggle("no-scroll", !isActiveNav);
    }

    useEffect(() => {
        if (isActiveNav) {
            document.documentElement.classList.add("no-scroll");
        } else {
            document.documentElement.classList.remove("no-scroll");
        }
    }, [isActiveNav]);
    const handleClickLink = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActiveNav(!isActiveNav)
    }
    return (

        <header className={style.home} >
            <div className={style.homeImg}>
                <img src={bg} alt=""/>
            </div>
            {
                isActiveNav ?
                    <nav className={style.mobileNavFul}>
                        <div className={style.mobileNavHeader}>
                            <h3>WattAttack</h3>
                            <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon} onClick={handleClickMenu}></i>
                        </div>
                        <a href="#howStart" onClick={handleClickLink}>КАК НАЧАТЬ</a>
                        <a href="#routes" onClick={handleClickLink}>МАРШРУТЫ</a>
                        <a href="#training" onClick={handleClickLink}>ТРЕНИРОВКИ</a>
                        <a href="#about" onClick={handleClickLink}>О НАС</a>
                        <a href="#help" onClick={handleClickLink}>ПОМОЩЬ</a>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>

                    </nav>
                    :
                    <nav className={style.mobileNavPart}>
                        <a href="#howStart">КАК НАЧАТЬ</a>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                        <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon} onClick={handleClickMenu}></i>
                    </nav>
            }
            <nav className={style.navbar} id={style.home}>
                <a href="#howStart">КАК НАЧАТЬ</a>
                <a href="#routes">МАРШРУТЫ</a>
                <a href="#training">ТРЕНИРОВКИ</a>
                <a href="#about">О НАС</a>
                <a href="#help">ПОМОЩЬ</a>
                <NavLink to={"/login"}>ВОЙТИ</NavLink>
                <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
            </nav>

            <div className={style.heading}>
                <h1>WattAttack</h1>
                <p>результаты превзойдут ваши ожидания</p>
                <button className={style.btn}>ПОГНАЛИ!</button>
            </div>

        </header>


    );
}

export default Header;