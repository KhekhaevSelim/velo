import React, { useEffect, useState } from "react"
import style from "./RecoverPassword.module.css"
import { useFormik } from "formik";
import AuthHeader from "../Header/AuthHeader";
import closeIcon from "../../../../assets/icons/+.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../CustomHooks/UseAppDispatch";
import { getCodeForRecoverTC, recoverPasswordTC } from "../../../../BLL/AuthReducer";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../BLL/Store";
const RecoverPassword = () => {
    const dispatch = useAppDispatch();
    const notifyMessageOk = useSelector<AppRootStateType, string>(state => state.AppReducer.notifyMessageOk);
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
            formik.resetForm()
            setShowErrors(false);
            dispatch(getCodeForRecoverTC(values.emailRecoverPassword));         
        },
        validate: (values) => {
            const errors: any = {};

            if (!values.emailRecoverPassword) {
                errors.emailRecoverPassword = "Пожалуйста, введите обязательное поле e-mail";
            } else if (!isValidEmail(values.emailRecoverPassword)) {
                errors.emailRecoverPassword = "Пожалуйста, введите корректный e-mail";
            }
            return errors;
        }
    });

    const formik2 = useFormik({
        initialValues: {
            code : '',
            email : '',
            newPassword: '',
            confirmNewPass : ''
        },
        onSubmit: values => {
            const reqData = {
                code : values.code,
                email : values.email,
                password : values.newPassword
            }
            formik2.resetForm()
            dispatch(recoverPasswordTC(reqData))
            
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
            if (!values.email) {
                errors.email = "Пожалуйста, введите обязательное поле e-mail";
            } else if (!isValidEmail(values.email)) {
                errors.email = "Пожалуйста, введите корректный e-mail";
            }
            if(!values.code){
                errors.code = "Пожалуйста, введите код"
            }
            return errors;
        }
    });
    useEffect(()=> {
        if(notifyMessageOk === "Вам на почту отправлен код"){
            setShowNewPassModal(true)
        } else if(notifyMessageOk === "Вы успешно сменили пароль"){
            closeNewPassModalFunc();
            navigate("/login");
        }
    },[notifyMessageOk])
    
    return (
        <div className={style.container}>
            <div className={showNewPassModal ? style.recoverModalBg : style.hiddenRecoverModal} onClick={closeNewPassModalFunc}>
                <div className={style.recoverModal} onClick={(e)=> e.stopPropagation()}>
                    <h3>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h3>
                    <form onSubmit={formik2.handleSubmit} className={style.form}>
                        {/**
                         * данный инпут имеет изначально display : none, поэтому мы напрямую передает value и обработчики событий
                         **/
                        }
                         <input
                            id={"code"}
                            type="text"
                            placeholder={"Введите код из сообщения"}
                            value={formik2.values.code}
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}

                            className={
                                formik2.errors.code
                                    ? style.recoverErrorInput
                                    : style.recoverInput
                            }
                        />
                        {formik2.errors.code && showErrors &&(
                            <div className={style.errorMessage}>
                                {formik2.errors.code}
                            </div>
                        )}
                        <input
                            id={"email"}
                            type="email"
                            placeholder={"Введите Ваш E-mail"}
                            value={formik2.values.email}
                            onChange={formik2.handleChange}
                            onBlur={formik2.handleBlur}

                            className={
                                formik2.errors.email
                                    ? style.recoverErrorInput
                                    : style.recoverInput
                            }
                        />
                        {formik2.errors.email && showErrors &&(
                            <div className={style.errorMessage}>
                                {formik2.errors.email}
                            </div>
                        )}
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
                            placeholder={"Подтвердите новый пароль"}
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