import React from 'react';
import style from "./QuestionItem.module.css";
import {QuestionDataType} from "../Help";
import close from "../../../../assets/icons/close.png";
import open from "../../../../assets/icons/open.png";
type QuestionItemPropsType = {
    questionData : QuestionDataType
    showAnswer : boolean
    handleQuestionClickOpen : (index : number) => void
    handleQuestionClickClose : (index : number) => void
    index : number
}
const QuestionItem = (props: QuestionItemPropsType) => {
    return (
        <div className={style.questionItem}>
            <div className={style.question}>
                <h3 className={`${props.showAnswer ? style.withoutLine : ""}`}>
                    {props.questionData.question}
                </h3>
                {props.showAnswer ?
                    // <i className="bx bx-x" id={style.plusIcon} onClick={()=>props.handleQuestionClickClose(props.index)}></i>
                    <img src={close} className={style.closeIcon} onClick={()=>props.handleQuestionClickClose(props.index)}></img>
                    :
                    // <i className="bx bx-plus" id={style.plusIcon} onClick={()=>props.handleQuestionClickOpen(props.index)}></i>
                    <img src={open} className={style.openIcon} onClick={()=>props.handleQuestionClickOpen(props.index)}></img>
                }
            </div>
            <div className={`${props.showAnswer ? style.answerShow : style.answerHidden}`}>
                        <span  id={style.answerTitle}>
                            {props.questionData.title}
                        </span>
                <p id={style.answerInfo}>
                    {props.questionData.subTitle}
                </p>
                <ul>
                    {props.questionData.answer.map((ans,index) => {
                        return (
                            <li key={index}>{ans}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default QuestionItem;