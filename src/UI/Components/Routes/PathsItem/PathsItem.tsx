import React, {useEffect, useState} from 'react';
import style from "./PathsItem.module.css";
import {RoutesDataType} from "../Paths";
// jest-ignore
import 'react-tippy/dist/tippy.css';
// jest-ignore
import Tippy from '@tippyjs/react';
// jest-ignore
import 'tippy.js/dist/tippy.css';
// jest-ignore
import 'tippy.js/themes/light.css';
// jest-ignore
import 'tippy.js/animations/perspective.css';
import {Ribbon, RibbonContainer} from "react-ribbons";
type RouteItemPropsType = {
    routeData : RoutesDataType
}
const PathsItem = (props : RouteItemPropsType) => {
    const [offset, setOffset] = useState<any>([-140, 10]);
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let newOffset = [-140, 10];

            if (windowWidth < 1130) {
                newOffset = [-70, 10];
            } else if (windowWidth < 1130){
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
    return (
        <div className={style.routeItem}>
              <div className={style.imageContainer}>
                  {props.routeData.dev ?
                      <Ribbon
                          side="left"
                          type="corner"
                          size="large"
                          backgroundColor="#FD5900"
                          color="#FFFFFF"
                          fontFamily="sans"
                          withStripes
                      >
                          <span style={{fontSize : "11px"}}>В РАЗРАБОТКЕ</span>
                      </Ribbon>
                  :
                      ""
                  }

                <img src={props.routeData.img} loading='lazy' alt="" className={style.routeImage} />
              </div>
            <div className={style.routeItemFooter}>
                <span>{props.routeData.title}</span>
                    {/* <Tippy
                        className={style.info}
                        offset={offset}
                        placement={"bottom"}
                        animation={"perspective"}
                        theme={"light"}
                        interactive={true}
                        content={
                            <div >
                                <p className={style.routeDescription}>{props.routeData.info}</p>
                                <p className={style.routeParams}>{props.routeData.params}</p>
                            </div>
                        }
                    > */}
                        <img src={props.routeData.icon} alt="" className={style.footerIcon}/>
                    {/* </Tippy> */}
            </div>
        </div>
    );
};

export default PathsItem;