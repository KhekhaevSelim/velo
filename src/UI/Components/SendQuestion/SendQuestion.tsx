import React from 'react';
import style from "./SendQuestion.module.css";
import {useFormik} from "formik";

const SendQuestion = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
    });
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.formContainer}>
                    <div className={style.formTitle}>
                        <h4>
                            Остались вопросы?
                        </h4>
                        <span>
                       Заполните форму обратной связи, наш менеджер 
                   </span>
                   <br></br>
                   <span>
                   свяжется с вами в ближайшее время
                   </span>
                    </div>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <input
                            type="text"
                            placeholder={"Ваше имя"}
                            {...formik.getFieldProps("firstName")}
                        />
                        <input
                            type="email"
                            placeholder={"Ваш e-mail"}
                            {...formik.getFieldProps("email")}
                        />
                        <textarea
                            placeholder={"Опишите Ваш вопрос"}
                            {...formik.getFieldProps("message")}
                        />
                        <button type="submit" className={style.btn}>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendQuestion;