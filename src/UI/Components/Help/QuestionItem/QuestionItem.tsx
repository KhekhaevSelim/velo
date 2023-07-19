import React from 'react';
import style from "./QuestionItem.module.css";
import {QuestionDataType} from "../Help";
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
                <p>
                    {props.questionData.question}
                </p>
                {props.showAnswer ?
                    <i className="bx bx-x" id={style.plusIcon} onClick={()=>props.handleQuestionClickClose(props.index)}></i>
                    :
                    <i className="bx bx-plus" id={style.plusIcon} onClick={()=>props.handleQuestionClickOpen(props.index)}></i>
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