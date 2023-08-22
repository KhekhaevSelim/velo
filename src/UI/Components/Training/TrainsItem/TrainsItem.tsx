import React from 'react';
import style from "./TrainsItem.module.css";
import {TrainingDataType} from "../Training";

type TrainsItemPropsType = {
    trainsData : TrainingDataType
}
const TrainsItem = (props : TrainsItemPropsType) => {
    return (
//         <div className={style.trainsItem}>
//             <div className={style.top}>
//                       <span>
// {props.trainsData.num}
//                       </span>
//                 <h3>
//                     {props.trainsData.title}
//                 </h3>
//             </div>
//             <div className={style.bottom}>
//                          <span>
//                              {props.trainsData.subtitle}
//                          </span>
//             </div>
//         </div>
<></>
    );
};

export default TrainsItem;