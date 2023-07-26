import React from 'react';
import style from "./Training.module.css"
import TrainsItem from "./TrainsItem/TrainsItem";

export type TrainingDataType = {
    num: string
    title: string
    subtitle: string
}
const Training = () => {
    const trainingData: Array<TrainingDataType> = [
        {
            num: "01",
            title: "САМОСТОЯТЕЛЬНОЕ СОЗДАНИЕ",
            subtitle: "Самостоятельно составляйте структурные тренировки, благодаря встроенному инструменту создания тренировок"
        },
        {
            num: "02",
            title: "ГОТОВЫЕ ТРЕНИРОВКИ",
            subtitle: "Загружайте готовые тренировки, доступные в приложении"
        },
        {
            num: "03",
            title: "ЗАГРУЗКА ИЗ ZWO ФАЙЛОВ",
            subtitle: "Загружайте из ZWO (Training Peaks, Zwift) файлов уже готовые тренировки (мы работаем над автоматической интеграцией, следите за новостями)"
        },
        {
            num: "04",
            title: "УМНЫЕ ТРЕНИРОВОЧНЫЕ ПЛАНЫ",
            subtitle: "Используйте умные тренировочные планы"
        },
    ]
    return (
        <div className={style.container}>
            <div className={style.header}>
                <p>
                    ТРЕНИРОВКИ
                </p>
                <span>
                    WattAttack предоставляет несколько вариантов создания тренировок
                </span>
            </div>

            <div className={style.wrapper}>

                    <div className={style.trainsContainer} id={"training"}>
                        <div className={style.wrapWrapper}>
                        {trainingData.length > 0 ? trainingData.map(t => {
                                return (
                                    <TrainsItem key={t.num} trainsData={t}/>
                                )
                            })
                            :
                            ""
                        }
                    {/*    <div className={style.footer}>*/}
                    {/*        <h3>*/}
                    {/*            Загружай свои тренировки в приложения Garmin, Strava, Training Peaks и соц. сети,*/}
                    {/*        </h3>*/}
                    {/*        <span>*/}
                    {/*И пусть все удивятся*/}
                    {/*    </span>*/}
                    {/*    </div>*/}
                    </div>
                        <div className={style.footer}>
                            <h3>
                                Загружай свои тренировки
                            </h3>
                            <h3>
                                в приложения Garmin, Strava, Training Peaks и соц. сети,
                            </h3>
                            <span>
                    И пусть все удивятся
                        </span>
                        </div>
                    </div>

            </div>

        </div>
    );
};

export default Training;