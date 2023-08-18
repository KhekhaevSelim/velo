import React from 'react';
import style from "./CompetitionsItem.module.css";
import {CompetitionsDataType} from "../Competitions";

type CompetitionsItemPropsType = {
    competitionsData : CompetitionsDataType
}

const CompetitionsItem = (props : CompetitionsItemPropsType) => {
    return (
        <div className={style.competitionsItem}>

            <img src={props.competitionsData.image} alt="" loading='lazy'/>

            <div className={style.footer}>
                <h3>
                    {props.competitionsData.title}
                </h3>
            </div>
            <div className={style.info}>
                {props.competitionsData.info}
            </div>
        </div>
    );
};

export default CompetitionsItem;