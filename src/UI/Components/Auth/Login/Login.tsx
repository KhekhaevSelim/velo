import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import style from "./Login.module.css";
import {NavLink} from "react-router-dom";
import AuthHeader from "../Header/AuthHeader";
import {useFormik} from "formik";
import closeIcon from "../../../../assets/icons/+.svg";




/**
 * Типизация объекта ошибки валидации
 */
type ErrorsType = {
    email: string
    password: string
}
const Login = () => {
    /**
     * локальный стейт для тогглинга мадалки восстановления пароля .. заглушка, пока нет бэка
     */
    const [showNewPassModal, setShowNewPassModal] = useState<boolean>(false)

    /**
     * функция для отображения мадолки восстановления пароля ... заглушка, пока нет бэка
     */
    const showModal2 = () => {
        setShowNewPassModal(true)
    }
    /**
     * функция для закрытия модалки
     */
    const closeModal2 = () => {
        setShowNewPassModal(false)
    }
    /**
     * локальный стейт для тогглинга мадалки восстановления пароля
     */
    const [showRecoverModal, setShowRecoverModal] = useState<boolean>(false)

    /**
     * функция для отображения мадолки восстановления пароля
     */
    const showModal = () => {
        setShowRecoverModal(true)
    }
    /**
     * функция для закрытия модалки
     */
    const closeModal = () => {
        setShowRecoverModal(false)
    }
    /**
     * локальный стейт для тогглинга иконки скрытия пароля
     */
    const [showPassword, setShowPassword] = useState<boolean>(false);
    /**
     * функции для тогглинга иконки скрытия пароля
     */
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
        validate: (values) => {
            const errors: any = {};

            if (!values.email) {
                errors.email = "Пожалуйста, введите обязательное поле e-mail";
            } else if (!isValidEmail(values.email)) {
                errors.email = "Пожалуйста, введите корректный e-mail";
            }

            if (!values.password) {
                errors.password = "Пожалуйста, введите пароль";
            }
            return errors;
        }
    });

    const formik2 = useFormik({
        initialValues: {
            emailRecoverPassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik2.resetForm()
            setTimeout(()=> {
                closeModal()
                showModal2()
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
    const formik3 = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPass : ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik2.resetForm()
            closeModal2()
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
            console.log(errors)
            return errors;
        }
    });
    return (
        <div className={style.container}>
            <div className={ showNewPassModal ? style.recoverModalBg : style.hiddenRecoverModalBg} onClick={closeModal2}>
                <div className={style.recoverModal} style={{height : '320px'}} onClick={(e)=> e.stopPropagation()}>
                    <h3>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h3>
                    <form onSubmit={formik3.handleSubmit} className={style.form}>
                        {/**
                         * данный инпут имеет изначально display : none, поэтому мы напрямую передает value и обработчики событий
                         **/
                        }
                        <input
                            id={"newPassword"}
                            type="password"
                            placeholder={"Введите новый пароль"}
                            value={formik3.values.newPassword}
                            onChange={formik3.handleChange}
                            onBlur={formik3.handleBlur}

                            className={
                                formik3.touched.newPassword && formik3.errors.newPassword
                                    ? style.recoverErrorInput
                                    : style.recoverInput
                            }
                        />
                        {formik3.touched.newPassword && formik3.errors.newPassword && (
                            <div className={style.errorMessage}>
                                {formik3.errors.newPassword}
                            </div>
                        )}
                        <input
                            id={"confirmNewPass"}
                            type="password"
                            placeholder={"Введите новый пароль"}
                            value={formik3.values.confirmNewPass}
                            onChange={formik3.handleChange}
                            onBlur={formik3.handleBlur}

                            className={
                                formik3.touched.confirmNewPass && formik3.errors.confirmNewPass
                                    ? style.recoverErrorInput
                                    : style.recoverInput
                            }
                        />
                        {formik3.touched.confirmNewPass && formik3.errors.confirmNewPass && (
                            <div className={style.errorMessage}>
                                {formik3.errors.confirmNewPass}
                            </div>
                        )}
                        <button type="submit" className={style.recoverBtn} style={{marginTop : "10px"}}>ВОССТАНОВИТЬ</button>
                    </form>
                    <img src={closeIcon} alt={"close"} onClick={closeModal2} className={style.closeIcon}/>
                </div>
            </div>
            <div className={ showRecoverModal ? style.recoverModalBg : style.hiddenRecoverModalBg} onClick={closeModal}>
                <div className={style.recoverModal} onClick={(e)=> e.stopPropagation()}>
                    <h3>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h3>
                    <form onSubmit={formik2.handleSubmit} className={style.form}>
                        {/**
                         * данный инпут имеет изначально display : none, поэтому мы напрямую передает value и обработчики событий
                         **/
                        }
                    <input
                        id={"emailRecoverPassword"}
                        type="email"
                        placeholder={"Ваш e-mail"}
                        value={formik2.values.emailRecoverPassword}
                        onChange={formik2.handleChange}
                        onBlur={formik2.handleBlur}

                        className={
                            formik2.touched.emailRecoverPassword && formik2.errors.emailRecoverPassword
                                ? style.recoverErrorInput
                                : style.recoverInput
                        }
                    />
                    {formik2.touched.emailRecoverPassword && formik2.errors.emailRecoverPassword && (
                        <div className={style.errorMessage}>
                            {formik2.errors.emailRecoverPassword}
                        </div>
                    )}
                        <button type="submit" className={style.recoverBtn} style={{marginTop : "10px"}}>ВОССТАНОВИТЬ</button>
                    </form>
                    <img src={closeIcon} alt={"close"} onClick={closeModal} className={style.closeIcon}/>
                </div>
            </div>
            <AuthHeader/>
            <div className={style.loginContainer}>
                <div className={style.loginFormContainer}>
                    <h3>АВТОРИЗАЦИЯ</h3>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <input
                            type="email"
                            placeholder={"Ваш e-mail"}
                            {...formik.getFieldProps("email")}
                            className={
                                formik.touched.email && formik.errors.email
                                    ? style.errorInput
                                    : style.input
                            }
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className={style.errorMessage}>
                                {formik.errors.email}
                            </div>
                        )}
                            <div className={formik.touched.password && formik.errors.password
                                ? style.errorInput
                                : style.input}>
                                <input
                                    style={{width : "95%"}}
                                    type={showPassword ? "text" : "password"}
                                    placeholder={"Введите пароль"}
                                    {...formik.getFieldProps("password")}

                                />
                                <i className='bx bx-show' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}></i>
                                {/*<span onClick={handleClickShowPassword}><img src="../../../../assets/icons/showPassSvg.svg" /></span>*/}
                            </div>

                        {formik.touched.password && formik.errors.password && (
                            <div className={style.errorMessage}>
                                {formik.errors.password}
                            </div>
                        )}
                        <button type="submit" className={style.btn}>ВОЙТИ</button>
                    </form>
                    <div className={style.footer}>
                        <NavLink to={"/register"} className={style.registerLink}>Нет аккаунта?
                            Зарегистрируйтесь</NavLink>
                        <a href={"#recoverPassword"} className={style.recoverLink} onClick={showModal}>Забыли пароль?</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;