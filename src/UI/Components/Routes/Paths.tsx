import React, {useEffect, useState} from 'react';
import style from "./Paths.module.css"
import route1 from "../../../assets/image/route1.webp"
import route2 from "../../../assets/image/route2.webp"
import route3 from "../../../assets/image/route3.webp"
import route4 from "../../../assets/image/route4.webp"
import route5 from "../../../assets/image/route5.webp"
import attention from "../../../assets/icons/attention.svg"
import PathsItem from "./PathsItem/PathsItem";


export type RoutesDataType = {
    img: string
    title: string
    info: string
    icon: string
    params: string
    dev: boolean
}
const Paths = () => {
    const [offset, setOffset] = useState<any>([-140, 10]);
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let newOffset = [-140, 10];

            if (windowWidth < 1130) {
                newOffset = [-70, 10];
            } else if (windowWidth < 1130) {
                newOffset = [-30, 10];
            }

            setOffset(newOffset);
        };

        handleResize(); // Вызываем handleResize() при первой загрузке
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    let routesData: Array<RoutesDataType> = [
        {
            img: route1,
            title: "БОГАТОЕ РАЗНООБРАЗИЕ",
            icon: attention,
            info: "some text about route hbuybubi bobuyb",
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
        <div className={style.container} id={"routes"}>
            <div className={style.title}>
                <h3>КАРТЫ</h3>
            </div>
            <div className={style.wrapper}>
                <div className={style.routesContainer}>
                    {
                        routesData.length > 0 ? routesData.map((r, index) => {
                                return (
                                    <PathsItem key={index} routeData={r}/>
                                )
                            })
                            :
                            ""
                    }
                    <div className={style.staticItem}>
                        <p>ПРОЯВИ СЕБЯ И ПОЛУЧИ</p> 
                        <p>ДОСТУП К ЗАКРЫТЫМ</p>
                        <span>СПЕЦИАЛЬНЫМ КАРТАМ</span>
                    </div>
                </div>
            
            </div>
            <div className={style.shape}>

            </div>
        </div>
    );
};

export default Paths;