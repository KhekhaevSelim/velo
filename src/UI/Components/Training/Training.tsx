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
            <div className={style.header_mob}>
                <p>
                    ТРЕНИРОВКИ
                </p>
                <span>
                    WattAttack предоставляет несколько</span>
                    <span>
                    вариантов создания тренировок
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
                        <div className={style.trainsItem1}>
                         <div className={style.top}>
                           <div className={style.circle}>
                            01
                           </div>
                           <h3>
                           САМОСТОЯТЕЛЬНОЕ
                           </h3>
                           <h3>
                           СОЗДАНИЕ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Самостоятельно составляйте структурные
                         </span>
                         <span>
                         тренировки, благодаря встроенному
                         </span>
                         <span>
                         инструменту создания тренировок
                         </span>
                        </div>
                       </div>
                       
                       <div className={style.trainsItem3}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            03
                           </div>
                           <h3>
                           ЗАГРУЗКА
                           </h3>
                           <h3>
                           ИЗ ZWO ФАЙЛОВ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Загружайте из ZWO (Training Peaks, Zwift) файлов уже 
                         </span>
                         <span>
                         готовые тренировки (мы работаем над автоматической
                         </span>
                         <span>
                         интеграцией, следите за новостями)
                         </span>
                        </div>
                       </div>

                       <div className={style.trainsItem2}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            02
                           </div>
                           <h3>
                           ГОТОВЫЕ
                           </h3>
                           <h3>
                           ТРЕНИРОВКИ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Загружайте готовые тренировки,
                         </span>
                         <span>
                         доступные в приложении
                         </span>
                        </div>
                       </div>

                       

                       <div className={style.trainsItem4}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            04
                           </div>
                           <h3>
                           УМНЫЕ ТРЕНИРОВОЧНЫЕ
                           </h3>
                           <h3>
                            ПЛАНЫ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Используйте умные
                         </span>
                         <span>
                         тренировочные планы
                         </span>
                        </div>
                       </div>
                    </div>
                        
                    <div className={style.wrapWrapper_tab}>
                        <div className={style.trainsItem1_tab}>
                         <div className={style.top}>
                           <div className={style.circle}>
                            01
                           </div>
                           <h3>
                           САМОСТОЯТЕЛЬНОЕ
                           </h3>
                           <h3>
                           СОЗДАНИЕ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Самостоятельно составляйте 
                         </span>
                         <span>
                         структурные тренировки,
                         </span>
                         <span>
                         благодаря встроенному
                         </span>
                         <span>
                         инструменту создания тренировок
                         </span>
                        </div>
                       </div>
                       
                       <div className={style.trainsItem3_tab}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            03
                           </div>
                           <h3>
                           ЗАГРУЗКА
                           </h3>
                           <h3>
                           ИЗ ZWO ФАЙЛОВ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Загружайте из ZWO (Training Peaks,
                         </span>
                         <span>
                         Zwift) файлов уже готовые тренировки 
                         </span>
                         <span>
                         (мы работаем над автоматической
                         </span>
                         <span>
                         интеграцией, следите за новостями)
                         </span>
                        </div>
                       </div>

                       <div className={style.trainsItem2_tab}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            02
                           </div>
                           <h3>
                           ГОТОВЫЕ
                           </h3>
                           <h3>
                           ТРЕНИРОВКИ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Загружайте готовые тренировки,
                         </span>
                         <span>
                         доступные в приложении
                         </span>
                        </div>
                       </div>

                       

                       <div className={style.trainsItem4_tab}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            04
                           </div>
                           <h3>
                           УМНЫЕ ТРЕНИРОВОЧНЫЕ
                           </h3>
                           <h3>
                            ПЛАНЫ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Используйте умные
                         </span>
                         <span>
                         тренировочные планы
                         </span>
                        </div>
                       </div>
                    </div>

                    <div className={style.wrapWrapper_mob}>
                        <div className={style.trainsItem1_mob}>
                         <div className={style.top}>
                           <div className={style.circle}>
                            01
                           </div>
                           <h3>
                           САМОСТОЯТЕЛЬНОЕ
                           </h3>
                           <h3>
                           СОЗДАНИЕ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Самостоятельно составляйте 
                         </span>
                         <span>
                         структурные тренировки,
                         </span>
                         <span>
                         благодаря встроенному
                         </span>
                         <span>
                         инструменту создания
                         </span>
                         <span>
                         тренировок
                         </span>
                        </div>
                       </div>
                       
                       <div className={style.trainsItem3_mob}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            03
                           </div>
                           <h3>
                           ЗАГРУЗКА
                           </h3>
                           <h3>
                           ИЗ ZWO ФАЙЛОВ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Загружайте из ZWO (Training 
                         </span>
                         <span>
                         Peaks, Zwift) файлов уже 
                         </span>
                         <span>
                         готовые тренировки 
                         </span>
                         <span>
                         (мы работаем над 
                         </span>
                         <span>
                         автоматической интеграцией,
                         </span>
                         <span>
                          следите за новостями)
                         </span>
                        </div>
                       </div>

                       <div className={style.trainsItem2_mob}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            02
                           </div>
                           <h3>
                           ГОТОВЫЕ
                           </h3>
                           <h3>
                           ТРЕНИРОВКИ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Загружайте готовые 
                         </span>
                         <span>
                         тренировки, доступные в
                         </span>
                         <span>
                          приложении
                         </span>
                        </div>
                       </div>

                       

                       <div className={style.trainsItem4_mob}>
                         <div className={style.top}>
                         <div className={style.circle}>
                            04
                           </div>
                           <h3>
                           УМНЫЕ ТРЕНИРОВОЧНЫЕ
                           </h3>
                           <h3>
                            ПЛАНЫ
                           </h3>
                         </div>
                        <div className={style.bottom}>
                         <span>
                         Используйте умные
                         </span>
                         <span>
                         тренировочные планы
                         </span>
                        </div>
                       </div>
                    </div>


                    </div>
                    <div className={style.footerContainer}>
                      <div className={style.footer}>
                            <h3>
                                ЗАГРУЖАЙ СВОИ ТРЕНИРОВКИ
                            </h3>
                            <h3>
                                В ПРИЛОЖЕНИЯ GARMIN, STRAVA,
                            </h3>
                            <h3>
                            TRAINING PEAKS И СОЦ. СЕТИ,
                            </h3>
                            <span>
                               И ПУСТЬ ВСЕ УДИВЯТСЯ
                            </span>
                      </div>

                      <div className={style.footer_tab}>
                            <h3>
                                ЗАГРУЖАЙ СВОИ ТРЕНИРОВКИ
                            </h3>
                            <h3>
                                В ПРИЛОЖЕНИЯ GARMIN, STRAVA, TRAINING PEAKS И СОЦ. СЕТИ,
                            </h3>
                            <span>
                               И ПУСТЬ ВСЕ УДИВЯТСЯ
                            </span>
                      </div>

                      <div className={style.footer_mob}>
                            <h3>
                                ЗАГРУЖАЙ СВОИ ТРЕНИРОВКИ
                            </h3>
                            <h3>
                                В ПРИЛОЖЕНИЯ GARMIN, STRAVA, TRAINING 
                            </h3>
                            <h3>
                            PEAKS И СОЦ. СЕТИ,
                            </h3>
                            <span>
                               И ПУСТЬ ВСЕ УДИВЯТСЯ
                            </span>
                      </div>
                    </div>
            </div>

         </div>
    );
};

export default Training;