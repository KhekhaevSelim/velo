import React, { useState } from "react"
import style from "./RecoverPassword.module.css"
import { useFormik } from "formik";
import AuthHeader from "../Header/AuthHeader";
import closeIcon from "../../../../assets/icons/+.svg";
import { useNavigate } from "react-router-dom";
const RecoverPassword = () => {
     /**
     * хук для редиректа
     */
     const navigate = useNavigate()
     /**
     * локальный стейт для тогглинга мадалки восстановления пароля .. заглушка, пока нет бэка
     */
     const [showNewPassModal, setShowNewPassModal] = useState<boolean>(false)

     /**
      * функция для отображения мадолки восстановления пароля ... заглушка, пока нет бэка
      */
     const showNewPassModalFunc = () => {
         setShowNewPassModal(true)
     }
     /**
      * функция для закрытия модалки
      */
     const closeNewPassModalFunc = () => {
         setShowNewPassModal(false)
     }
     /**
     * локальный стейт для показа ошибок валидации формы тольок при клике
     */
     const [showErrors, setShowErrors] = useState(false);
     const handleClickShowErrors = () => {
         setShowErrors(true);
       };
     /**
     * функция для проверки соотвествия емейла стандарту
     */
     const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };
    /**
     * хук обработки формы, отправки данных, валидации
     */
    const formik = useFormik({
        initialValues: {
            emailRecoverPassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
            setShowErrors(false);
            setTimeout(()=> {
                showNewPassModalFunc()
            })
        },
        validate: (values) => {
            const errors: any = {};

            if (!values.emailRecoverPassword) {
                errors.emailRecoverPassword = "Пожалуйста, введите обязательное поле e-mail";
            } else if (!isValidEmail(values.emailRecoverPassword)) {
                errors.emailRecoverPassword = "Пожалуйста, введите корректный e-mail";
            }
            console.log(errors)
            return errors;
        }
    });

    const formik2 = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPass : ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik2.resetForm()
            closeNewPassModalFunc()
            navigate("/login")
        },
        validate: (values) => {
            const errors: any = {};

            if (!values.newPassword) {
                errors.newPassword = "Пожалуйста, введите пароль";
            }
            if(!values.confirmNewPass){
                errors.confirmNewPass = "Пожалуйста, подтвердите пароль";
            } else if (values.confirmNewPass && values.newPassword !== values.confirmNewPass) {
                errors.confirmNewPass = "Пароли не совпадают. Попробуйте еще раз";
            }
            return errors;
        }
    });
    return (
        <div className={style.container}>
            <div className={showNewPassModal ? style.recoverModalBg : style.hiddenRecoverModal} onClick={closeNewPassModalFunc}>
                <div className={style.recoverModal} style={{height : '320px'}} onClick={(e)=> e.stopPropagation()}>
                    <h3>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h3>
                    <form onSubmit={formik2.handleSubmit} className={style.form}>
                        {/**
                         * данный инпут имеет изначально display : none, поэтому мы напрямую передает value и обработчики событий
                         **/
                        }
                        <input
                            id={"newPassword"}
                            type="password"
                            placeholder={"Введите новый пароль"}
                            value={formik2.values.newPassword}
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}

                            className={
                                formik2.errors.newPassword
                                    ? style.recoverErrorInput
                                    : style.recoverInput
                            }
                        />
                        {formik2.errors.newPassword && showErrors &&(
                            <div className={style.errorMessage}>
                                {formik2.errors.newPassword}
                            </div>
                        )}
                        <input
                            id={"confirmNewPass"}
                            type="password"
                            placeholder={"Введите новый пароль"}
                            value={formik2.values.confirmNewPass}
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}

                            className={
                                formik2.errors.confirmNewPass
                                    ? style.recoverErrorInput
                                    : style.recoverInput
                            }
                        />
                        {formik2.errors.confirmNewPass && showErrors &&(
                            <div className={style.errorMessage}>
                                {formik2.errors.confirmNewPass}
                            </div>
                        )}
                        <button type="submit" className={style.recoverBtn} style={{marginTop : "10px"}} onClick={handleClickShowErrors}>ВОССТАНОВИТЬ</button>
                    </form>
                    <img src={closeIcon} alt={"close"} onClick={closeNewPassModalFunc} className={style.closeIcon}/>
                </div>
            </div>
            <AuthHeader/>
            <div className={style.recoverContainer}>
                <div className={style.recoverFormContainer}>
                    <h3>АВТОРИЗАЦИЯ</h3>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        {/**
                         * данный инпут имеет изначально display : none, поэтому мы напрямую передает value и обработчики событий
                         **/
                        }
                    <input
                        type="email"
                        placeholder={"Ваш e-mail"}
                        {...formik.getFieldProps("emailRecoverPassword")}

                        className={
                            formik.errors.emailRecoverPassword
                                ? style.errorInput
                                : style.input
                        }
                    />
                    {formik.errors.emailRecoverPassword && showErrors && (
                        <div className={style.errorMessage}>
                            {formik.errors.emailRecoverPassword}
                        </div>
                    )}
                        <button type="submit" className={style.btn} onClick={handleClickShowErrors}>ВОССТАНОВИТЬ</button>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default RecoverPassword;