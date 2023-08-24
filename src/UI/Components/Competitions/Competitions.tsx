import React from 'react';
import style from "./Competitions.module.css"
import comp1 from "../../../assets/image/competitions1.webp"
import comp2 from "../../../assets/image/competitions2.webp"
import comp3 from "../../../assets/image/competitions3.webp"
import comp4 from "../../../assets/image/competitions4.jpg"
import CompetitionsItem from "./CompetitionsItem/CompetitionsItem";

export type CompetitionsDataType = {
    image: string
    title: string
    info: string
}
const Competitions = () => {
    const competitionsData: Array<CompetitionsDataType> = [
        {
            image: comp1,
            title: "НАСТОЯЩАЯ ДУЭЛЬ",
            info: "Создай дуэль, выбери трассу, участок и параметры, и вызови друга на нее, чтобы выяснить отношения по-нашему, а может просто вместе обновить рекорды на тестировании"
        },
        {
            image: comp2,
            title: "ВЕЛОГОНКИ",
            info: "Настоящие соревнования для всех желающих или между клубами, чемпионаты, том числе с настоящими призами"
        },
        {
            image: comp3,
            title: "ЗАЕЗД НА ТРЕКЕ",
            info: "Короткие и энергичные гонки на пределе в виде дуэлей, для настоящих буйволов велоспорта"
        },
        {
            image: comp4,
            title: "ВЕЛОКВЕСТЫ",
            info: "Длительные на велостанке еще никогда не были такими интересными, самым умным мы еще и заплатим"
        },
    ]
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <h3>
                        СОРЕВНОВАНИЯ
                    </h3>
                </div>
                <div className={style.competitionsContainer}>
                    {competitionsData.length > 0 ?
                        competitionsData.map((c, index) => {
                            return (
                                <CompetitionsItem key={index} competitionsData={c} />
                            )
                        })
                        :
                        ""
                    }
                </div>
                <div className={style.footer}>
                    <h3>
                        БРОСАЙ ВЫЗОВ СВОИМ ДРУЗЬЯМ, 
                    </h3>
                    <h3>
                    ПРИСОЕДИНЯЙСЯ К ИХ ТРЕНИРОВКЕ
                    </h3>
                    <span>
                    И ОПЕРЕЖАЙ ИХ В РЕЙТИНГЕ!
                </span>
                </div>

                <div className={style.footer_tab}>
                    <h3>
                        БРОСАЙ ВЫЗОВ СВОИМ ДРУЗЬЯМ, ПРИСОЕДИНЯЙСЯ К ИХ ТРЕНИРОВКЕ
                    </h3>
                    <span>
                    И ОПЕРЕЖАЙ ИХ В РЕЙТИНГЕ!
                </span>
                </div>

                <div className={style.footer_mob}>
                    <h3>
                        БРОСАЙ ВЫЗОВ СВОИМ 
                    </h3>
                    <h3>
                    ДРУЗЬЯМ, ПРИСОЕДИНЯЙСЯ 
                    </h3>
                    <h3>
                    К ИХ ТРЕНИРОВКЕ
                    </h3>
                    <span>
                    И ОПЕРЕЖАЙ ИХ В РЕЙТИНГЕ!
                </span>
                </div>
            </div>
        </div>

    );
};

export default Competitions;