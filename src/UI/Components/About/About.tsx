import React from 'react';
import style from "./About.module.css"
import about1 from "../../../assets/image/aboutImage1.webp";
import about2 from "../../../assets/image/aboutImage2.webp";
import Rates from '../rates/Rates';

export type ratesDataType = {
    title : string
    price : string
    decsription : string
    disabled : boolean 
}

const About = () => {

    const ratesData : Array<ratesDataType>= [
        {
           title : "ПОДПИСКА НА МЕСЯЦ",
           price : "399 ₽",
           decsription : "только в сентябре вместо 499₽",
           disabled : false
        },
        {
            title : "ПОДПИСКА НА ПОЛГОДА",
            price : "2 490 ₽",
            decsription : "415 ₽ / мес",
            disabled : false
         },
         {
            title : "ТАРИФ “ТРЕНИРОВКА”",
            price : "99 ₽",
            decsription : "тренировка ограничена 5 часами",
            disabled : false
         },
         {
            title : "ТАРИФ “ПОМИНУТНЫЙ”",
            price : "1 ₽ / МИН",
            decsription : "вносите любой размер депозита, счет минут начинается с момента старта тренировки",
            disabled : false
         },
         {
            title : "ТАРИФ “ТРЕНЕР”",
            price : "no",
            decsription : "SOON",
            disabled : true
         },
         {
            title : "ПОДПИСКА НА ГОД",
            price : "no",
            decsription : "SOON",
            disabled : true
         }
    ]

    return (
        <div className={style.container} id={"about"}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <div className={style.title}>
                        <h3>
                            О НАС
                        </h3>
                    </div>
                    <div className={style.aboutContainer}>
                        <div className={style.left}>
                            <div className={style.leftTop}>
                                <h3>
                                    КТО МЫ?
                                </h3>

                                <p>
                                    Мы страстно любим велоспорт и триатлон, это 
                                </p>
                                <p>
                                существенная часть нашей жизни. Иногда нам кажется,
                                </p>
                                <p>
                                что это и есть жизнь.В 2022 году наша команда собралась,
                                </p>
                                <p>
                                чтобы сделать лучший велосимулятор для людей в
                                </p>
                                <p>
                                которых мы верим - для Вас!
                                </p>
                                <p>
                                    Мы уверены, что нам под силу сделать лучшее приложение 
                                </p>
                                <p>
                                в мире. Это значит, что у нас с Вами добавится еще один
                                </p>
                                <p>
                                повод по-настоящему гордиться нашей страной, в которой
                                </p>
                                <p>
                                живут талантливые, спортивные и открытые миру люди
                                </p>
                            </div>

                            <div className={style.leftTop_tab}>
                                <h3>
                                    КТО МЫ?
                                </h3>

                                <p>
                                    Мы страстно любим велоспорт и 
                                </p>
                                <p>
                                триатлон, это  существенная часть 
                                </p>
                                <p>
                                нашей жизни. Иногда нам кажется, что 
                                </p>
                                <p>
                                это и есть жизнь.В 2022 году наша  
                                </p>
                                <p>
                                команда собралась, чтобы сделать
                                </p>
                                <p>
                                лучший велосимулятор для людей в
                                </p>
                                <p>
                                которых мы верим - для Вас!
                                </p>
                                <p>
                                    Мы уверены, что нам под силу сделать  
                                </p>
                                <p>
                                лучшее приложение в мире. Это  
                                </p>
                                <p>
                                значит, что у нас с Вами добавится еще
                                </p>
                                <p>
                                один повод по-настоящему гордиться 
                                </p>
                                <p>
                                нашей страной, в которой живут
                                </p>
                                <p>
                                талантливые, спортивные и открытые 
                                </p>
                                <p>
                                миру люди
                                </p>
                            </div>

                            <div className={style.leftBottom}>
                                <h3>
                                    ЧЕМ МЫ ОТЛИЧАЕМСЯ?
                                </h3>
                                <span>
                            МЫ ПРОСТО СОЗДАЕМ ЛУЧШЕЕ ВО ВСЕХ
                        </span>
                        <span>
                        ОТНОШЕНИЯХ ПРИЛОЖЕНИЕ
                        </span>
                                <p>
                                    Чтобы иметь право так говорить, мы внимательно 
                                </p>
                                <p>
                                изучили конкурентов и придумали около 30 уникальных
                                </p>
                                <p>
                                функций нашего приложения, которые выведут
                                </p>
                                <p>
                                тренировочный процесс на новый уровень и сделают
                                </p>
                                <p>
                                его
                                    максимально комфортным и, главное, интересным
                                </p>
                                <p>
                                для Вас
                                </p>
                                <p>
                                    Кроме этого, мы смогли решить большинство проблем,  
                                </p>
                                <p>
                                которыми недовольны пользователи других
                                </p>
                                <p>
                                приложений во всем мире:
                                </p>
                                <ul>
                                    <li>— отличное качество графики при низких требованиях</li>
                                    <li>— гибкие тарифные планы, учитывающие сезонность</li>
                                    <li>— специальные гонки на треке и FTP-дуэли с друзьями</li>
                                </ul>
                            </div>
                             
                            <div className={style.leftBottom_tab}>
                                <h3>
                                    ЧЕМ МЫ ОТЛИЧАЕМСЯ?
                                </h3>
                                <span>
                            МЫ ПРОСТО СОЗДАЕМ ЛУЧШЕЕ ВО ВСЕХ
                        </span>
                        <span>
                        ОТНОШЕНИЯХ ПРИЛОЖЕНИЕ
                        </span>
                                <p>
                                    Чтобы иметь право так говорить, мы  
                                </p>
                                <p>
                                внимательно изучили конкурентов и 
                                </p>
                                <p>
                                придумали около 30 уникальных
                                </p>
                                <p>
                                функций нашего приложения,
                                </p>
                                <p>
                                которые выведут тренировочный 
                                </p>
                                <p>
                                процесс на новый уровень и сделают
                                </p>
                                <p>
                                его
                                    максимально комфортным и, 
                                </p>
                                <p>
                                главное, интересным для Вас
                                </p>
                                <p>
                                    Кроме этого, мы смогли решить
                                </p>
                                <p>
                                большинство проблем, которыми 
                                </p>
                                <p>
                                недовольны пользователи других
                                </p>
                                <p>
                                приложений во всем мире:
                                </p>
                                <ul>
                                    <li>— отличное качество графики при <br></br> низких требованиях</li>
                                    <li>— гибкие тарифные планы, <br></br> учитывающие сезонность</li>
                                    <li>— специальные гонки на треке и <br></br> FTP-дуэли с друзьями</li>
                                </ul>
                            </div>


                        </div>
                        <div className={style.right}>
                            <div className={style.imageContainer}>
                                <img src={about1} alt="" style={{marginRight : "8px"}} loading='lazy'/>
                                <img src={about2} alt="" style={{marginLeft : "8px"}} loading='lazy'/>
                            </div>
                            <h3>
                                ЧТО ВЫ ПОЛУЧИТЕ,
                            </h3>
                            <span className={style.fi}>
                            НАЧАВ ТРЕНИРОВАТЬСЯ С НАМИ?
                        </span>
                            <ul>
                                <li>— возможность тренироваться с друзьями и тренером в реальном времени и общаться в
                                    голосовом и видеочате
                                </li>
                                <li>— уникальные велоквесты и соревнованиях <br></br> между клубами</li>
                                <li>— кэшбэк за покупки и оплаты тарифов, накопление <br></br> баллов за тренировки и победы</li>
                                <li>— самостоятельное составление маршрутов и тренировок</li>
                            </ul>
                            <span>
                            И МНОГОЕ ДРУГОЕ
                        </span>
                            <p>
                                Мы целыми днями работаем над новыми функциями, вы  
                            </p>
                            <p>
                            будете получать уведомления о выходеновых версий,
                            </p>
                            <p>
                            обновления будут загружаться автоматически
                            </p>
                        </div>

                        <div className={style.right_tab}>
                            <div className={style.imageContainer_tab}>
                                <img src={about1} alt="" style={{marginRight : "8px"}} loading='lazy'/>
                                <img src={about2} alt="" style={{marginLeft : "8px"}} loading='lazy'/>
                            </div>
                            <h3>
                                ЧТО ВЫ ПОЛУЧИТЕ,
                            </h3>
                            <span className={style.fi}>
                            НАЧАВ ТРЕНИРОВАТЬСЯ С НАМИ?
                        </span>
                            <ul>
                                <li>— возможность тренироваться с <br></br> друзьями и тренером в реальном <br></br> времени и общаться в
                                    голосовом и <br></br> видеочате
                                </li>
                                <li>— уникальные велоквесты и <br></br> соревнованиях <br></br> между клубами</li>
                                <li>— кэшбэк за покупки и оплаты тарифов, <br></br> накопление баллов за тренировки и <br></br> победы</li>
                                <li>— самостоятельное составление <br></br> маршрутов и тренировок</li>
                            </ul>
                            <span>
                            И МНОГОЕ ДРУГОЕ
                        </span>
                            <p>
                                Мы целыми днями работаем над  
                            </p>
                            <p>
                            новыми функциями, вы  будете 
                            </p>
                            <p>
                            получать уведомления о выходе новых  
                            </p>
                            <p>
                            версий, обновления будут загружаться
                            </p>
                            <p>
                            автоматически
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Rates ratesData={ratesData}/>
            {/* <div className={style.rates}>
                <div className={style.rates_wrapper}>
                     <span className={style.rates_title}>
                     ТАРИФЫ
                     </span>
                   
                     <div className={style.rates_itemsContainer}>
                        <div className={style.rates__itemsContainer__item}>
                            <span className={style.item_title}>
                            ПОДПИСКА НА МЕСЯЦ
                            </span>
                            <span className={style.item_price}>
                            399 ₽
                            </span>
                            <span className={style.item_description}>
                            только в сентябре вместо 499₽
                            </span>
                            <button className={style.item_btn}>
                                ПРИОБРЕСТИ
                            </button>
                        </div>
                     </div>

                    
                </div>
            </div> */}
                <div className={style.footer}>
                    <div className={style.footerContainer}>
                        <h3>
                            ТРЕНИРУЙТЕСЬ КАК СЛЕДУЕТ,
                        </h3>
                        <span>
                И РЕЗУЛЬТАТЫ ПРЕВЗОЙДУТ
                </span>
                <span>
                ВАШИ ОЖИДАНИЯ
                </span>
                        <h3>
                            И ДАЖЕ ОЖИДАНИЯ ВАШЕГО ТРЕНЕРА
                        </h3>
                        <div className={style.startText}>
                            <h1>
                                НА СТАРТ...
                            </h1>
                            <h1>
                                ВНИМАНИЕ...
                            </h1>
                            
                    <span>
                        WattAttack!
                    </span>
                           
                        </div>

                        <button className={style.btn}>ПОГНАЛИ!</button>
                    </div>

                    <div className={style.footerContainer_mob}>
                        <h3>
                            ТРЕНИРУЙТЕСЬ КАК СЛЕДУЕТ,
                        </h3>
                        <span>
                И РЕЗУЛЬТАТЫ ПРЕВЗОЙДУТ
                </span>
                <span>
                ВАШИ ОЖИДАНИЯ
                </span>
                        <h3>
                            И ДАЖЕ ОЖИДАНИЯ 
                        </h3>
                        <h3>
                        ВАШЕГО ТРЕНЕРА
                        </h3>
                        <div className={style.startText}>
                            <h1>
                                НА СТАРТ...
                            </h1>
                            <h1>
                                ВНИМАНИЕ...
                            </h1>
                            
                    <span>
                        WattAttack!
                    </span>
                           
                        </div>

                        <button className={style.btn}>ПОГНАЛИ!</button>
                    </div>
                </div>


                
        </div>
    );
};

export default About;