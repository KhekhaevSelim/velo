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
                     <div className={style.executor}>
                     <span className={style.executor_text}>Исполнитель — ИП ПОПОВ СЕРГЕЙ ЭДУАРДОВИЧ,</span>
                     <span className={style.executor_text}>ОГРНИП 318732500016917, ИНН 732508819546,</span>
                     <span className={style.executor_text}>юридический адрес: Ульяновская обл., г Ульяновск,</span>
                     <span className={style.executor_text}>ул. Университетская набережная, д. 13, кв. 68, тел.: +7 (916) 389-61-68</span>
                     </div>
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
                    <span>info@wattattack.ru</span>
                    {/* <span>8 (999) 999-99-99</span> */}
                </div>
            </div>
            <div className={style.executor_mob}>
                     <span className={style.executor_text_mob}>Исполнитель — ИП ПОПОВ СЕРГЕЙ ЭДУАРДОВИЧ,</span>
                     <span className={style.executor_text_mob}>ОГРНИП 318732500016917, ИНН 732508819546,</span>
                     <span className={style.executor_text_mob}>юридический адрес: Ульяновская обл., г Ульяновск,</span>
                     <span className={style.executor_text_mob}>ул. Университетская набережная, д. 13, кв. 68, тел.: +7 (916) 389-61-68</span>
                     </div>
        </div>
    );
};

export default Footer;