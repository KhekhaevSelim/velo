import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.col1}>
                    <div className={style.footerLeft}>
                    <span>
              WattAttack
                   </span>
                        <div className={style.mobileCol}>
                            <p>Связаться с нами</p>
                            <span>wattattack@wattattack.ru</span>
                            <span>8 (999) 999-99-99</span>
                        </div>
                    </div>

                </div>
                <div className={style.col2}>
                    <a href="#login">
                        Войти
                    </a>
                    <a href="#upload">
                        Скачать
                    </a>
                    <a href="#howStart">
                        Как начать
                    </a>
                </div>
                <div className={style.col3}>
                    <a href="#routes">Маршруты</a>
                    <a href="#training">Тренировки</a>                  
                    <a href="#about">О нас</a>
                    <a href="#help">Помощь</a>
                    <a href="#help">Тарифы</a>
                </div>
                <div className={style.col4}>
                    <p>Связаться с нами</p>
                    <span>wattattack@wattattack.ru</span>
                    <span>8 (999) 999-99-99</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;