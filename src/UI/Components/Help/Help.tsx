import React, {useEffect, useState} from 'react';
import style from "./Help.module.css"
import attention from "../../../assets/icons/attention.svg";
import 'react-tippy/dist/tippy.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/perspective.css';
import QuestionItem from "./QuestionItem/QuestionItem";

export type QuestionDataType = {
    question : string
    title : string
    subTitle : string
    answer : Array<string>
}

const Help = () => {
    const questionsList : Array<QuestionDataType> = [
        {
            question : "Частый вопрос №1",
             title : "Заголовок ответа",
            subTitle : "Подзаголовок ответа",
             answer : ["— ответ к данному вопросу", "— еще какая-то важная инфа по данному вопросу"]
        },
        {
            question : "Не находится или не подключается мощеметр или пульсометр",
            title : "Особенно относится к подключению по протоколу BlueTooth",
            subTitle : "Самая известная причина почему мощемер или пульсометр не находится заключается в том, что к нему уже присоединена " +
                "другая программа по протоколу Bluetooth (Zwift, велокомпьютер, другой велосимулятор или даже сам Windows ," +
                " если изначально вами было установлено сопряжение с мощемером через Windows)",
            answer : ["— Для решения проблемы необходимо отключить программу от устройства, что высвободит его для нового подключения",
            "— Проверьте заряд батарей мощемера/пульсометра",
            "— Пододвиньте свой станок/велосипед ближе к компьютеру"]
        }
    ]
    const [showAnswer, setShowAnswer] = useState<Array<boolean>>([]);
    const [offset, setOffset] = useState<any>([70, 0]);
    const handleQuestionClickOpen = (index : number) => {
        setShowAnswer((prevShowAnswer)=> {
            const updatedShowAnswer = [...showAnswer]
            updatedShowAnswer[index] = true;
            return updatedShowAnswer
        })
    }
    const handleQuestionClickClose = (index : number) => {
        setShowAnswer((prevShowAnswer)=> {
            const updatedShowAnswer = [...showAnswer]
            updatedShowAnswer[index] = false;
            return updatedShowAnswer
        })
    }

    // useEffect(() => {
    //     const handleResize = () => {
    //         const windowWidth = window.innerWidth;
    //         // let newOffset = [0, 0];
    //         // setOffset(newOffset);
    //     };
    //
    //     handleResize(); // Вызываем handleResize() при первой загрузке
    //     window.addEventListener('resize', handleResize);
    //
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    return (
        <div className={style.container} id={"help"}>
            <div className={style.titleContainer}>
                <h3>
                    ПОМОЩЬ
                </h3>
            </div>
            <div className={style.systemContainer}>
                <h3>
                    CИСТЕМНЫЕ ТРЕБОВАНИЯ
                </h3>
                <div className={style.systemInfoContainer}>
                    <div className={style.minimal}>
                        <p>
                            Минимальные
                        </p>
                        <ul>
                            <li>64-битная Windows 10</li>
                            <li>Процессор Intel Core i5-2500 или AMD Ryzen 3 1200</li>
                            <li>8 Гб оперативной памяти</li>
                            <li>Видеокарта Nvidia GTX 950 или AMD R9 380</li>
                            <li>DirectX 11 и 10 Гб свободного места на жестком диске</li>
                        </ul>
                    </div>
                    <div className={style.recommend}>
                        <p>
                            Рекомендуемые
                        </p>
                        <ul>
                            <li>64-битная Windows 11</li>
                            <li>Процессор Intel Core i5-7600К или AMD Ryzen 5 1600</li>
                            <li>16 Гб оперативной памяти</li>
                            <li>Видеокарта Nvidia GTX 1060 или Radeon RX 570</li>
                            <li>DirectX 12 и 20 Гб свободного места на SSD</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.equipmentContainer}>
                <h3>
                    НЕОБХОДИМОЕ ОБОРУДОВАНИЕ
                </h3>
                <div className={style.equipmentInfoContainer}>
                    <div className={style.minimal}>
                        <p>
                            Обязательное
                        </p>
                        <ul>
                            <li>Наличие станка и/или мощемера c ANT и/или BLE 4.0</li>
                            <li>Любой велосипед</li>
                        </ul>
                    </div>
                    <div className={style.recommend}>
                        <p>
                            Дополнительное
                        </p>
                        <ul style={{maxWidth : "423px"}}>
                            <li>Переходник ANT USB-Stick для подключения по протоколу ANT</li>
                            <li>ANT/BLE пульсометр</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.simulatorContainer}>
                    <h3>
                        ЗАПУСК СИМУЛЯТОРА ТРЕБУЕТ НАЛИЧИЯ
                    </h3>
                    <ul>
                        <div className={style.simulatorIconWrapper}>
                            <li>Последней версии DirectX (11 или 12)</li>
                            <Tippy
                                className={style.info}
                                offset={offset}
                                placement={"bottom"}
                                animation={"perspective"}
                                theme={"light"}
                                interactive={true}
                                content={
                                    <div className={style.tooltipContent}>
                                        <p className={style.routeDescription}>some info</p>
                                        <p className={style.routeParams}>some info too</p>
                                    </div>
                                }
                            >
                                <img src={attention} alt="" />
                            </Tippy>

                        </div>
                        <div className={style.simulatorIconWrapper}>
                            <li>Последней версии MS Visual Studio</li>
                            <Tippy
                                className={style.info}
                                offset={offset}
                                placement={"bottom"}
                                animation={"perspective"}
                                theme={"light"}
                                interactive={true}
                                content={
                                    <div className={style.tooltipContent}>
                                        <p className={style.routeDescription}>some info some info</p>
                                        <p className={style.routeParams}>some info too</p>
                                    </div>
                                }
                            >
                                <img src={attention} alt="" />
                            </Tippy>
                        </div>
                        <div className={style.simulatorIconWrapper}>
                            <li>Свежих драйверов для видеокарты</li>
                            <Tippy
                                className={style.info}
                                offset={offset}
                                placement={"bottom"}
                                animation={"perspective"}
                                theme={"light"}
                                interactive={true}
                                content={
                                    <div className={style.tooltipContent}>
                                        <p className={style.routeDescription}>some info</p>
                                        <p className={style.routeParams}>some info too</p>
                                    </div>
                                }
                            >
                                <img src={attention} alt="" />
                            </Tippy>
                        </div>

                    </ul>
                </div>

                <div className={style.filesContainer}>
                    <h3>
                        ДЛЯ ВЫГРУЗКИ ТРЕНИРОВОК В ФИТ ФАЙЛЫ
                    </h3>
                    <div className={style.filesInfo}>
                        <p>
                            Должна быть установлена последняя текущая версия языка Java
                        </p>
                        <span>
                        Файл с установщиком находится по адресу: Папка с симулятором\ Windows\ WattAttack\Java\jre-8u371-windows-x64.exe
                    </span>
                    </div>

                </div>
            </div>
             <div className={style.questionsTitle}>
                 <h3>
                     ЧАСТЫЕ ВОПРОСЫ
                 </h3>
             </div>
             <div className={style.questionsContainer}>
                 {questionsList.length > 0 ?
                 questionsList.map((q, index) => {
                     return (
                         <QuestionItem key={index} index={index} questionData={q} showAnswer={showAnswer[index]} handleQuestionClickClose={handleQuestionClickClose} handleQuestionClickOpen={handleQuestionClickOpen}/>
                     )
                 })
                 :
                 ""
                 }
             </div>
            <div className={style.helpFooter}>
                <h3>
                    По всем остальным вопросам, относящимся к проблемам в работе приложения, а также предложениям по улучшению работы симулятора, пожалуйста, пишите на адрес
                </h3>
                <span>
                    wattattack@wattattack.ru
                </span>
            </div>
        </div>
    );
};

export default Help;