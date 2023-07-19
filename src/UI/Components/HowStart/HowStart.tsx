import React from 'react';
import style from "./HowStart.module.css"
import route1 from "../../../assets/image/route1.jpeg"
import route2 from "../../../assets/image/route2.jpeg"
import route3 from "../../../assets/image/route3.jpeg"
import route4 from "../../../assets/image/route4.bmp"
import route5 from "../../../assets/image/route5.png"
import attention from "../../../assets/icons/attention.svg"
import Routes from "../Routes/Routes";

export type RoutesDataType = {
    img: string
    title: string
    info: string
    icon: string
    params: string
    dev: boolean
}
const HowStart = () => {
    let routesData: Array<RoutesDataType> = [
        {
            img: route1,
            title: "БОГАТОЕ РАЗНООБРАЗИЕ",
            icon: attention,
            info: "some text about route",
            params: "some params about route",
            dev: false
        },
        {
            img: route2,
            title: "ОСТРОВ НАДЕЖДИНА",
            icon: attention,
            info: "some text about route",
            params: "some params about route",
            dev: false
        },
        {
            img: route3,
            title: "ЗИМНИЙ ТРЕК",
            icon: attention,
            info: "some text about route",
            params: "some params about route",
            dev: false
        },
        {
            img: route4,
            title: "ГОРНЫЙ СЕРПАНТИН",
            icon: attention,
            info: "some text about route",
            params: "some params about route",
            dev: true
        },
        {
            img: route5,
            title: "VIP СПЕЦ-КАРТЫ",
            icon: attention,
            info: "some text about route",
            params: "some params about route",
            dev: true
        }
    ]

    return (
        <section className={style.container}>
            <div className={style.backgroundLayer}>
                <div className={style.topSection}>
                    <div className={style.title} id={"howStart"}>
                        <h3>КАК НАЧАТЬ</h3>
                        <p>Если следовать нашей инструкции, уже через 10 минут начнется ваша первая тренировка с
                            WattAttack</p>
                    </div>
                </div>
                <div className={style.photoSection}>
                    {/*<img src={bg2} alt=""/>*/}
                    <div className={style.shapesContainer}>
                        <div className={style.square1}>
                            <h3>ШАГ 1</h3>
                            <p>
                                Давайте познакомимся! Пройдите простую регистрацию
                            </p>
                            <button className={style.btn}>РЕГИСТРАЦИЯ</button>
                        </div>
                        <div className={style.square2}>
                            <h3>ШАГ 2</h3>
                            <p>
                                Скачайте приложение. Запустите скачивание приложения, оно автоматически вас узнает
                            </p>
                            <button className={style.btn}>СКАЧАТЬ</button>
                        </div>
                        <div className={style.square3}>
                            <h3>ШАГ 3</h3>
                            <p>
                                Введите логин и пароль и начинайте пользоваться приложением
                            </p>
                            <button className={style.btn}>ВОЙТИ</button>
                        </div>
                    </div>
                    <Routes/>
                </div>
                <div className={style.bottomSection}></div>
            </div>

        </section>
    );
};

export default HowStart;