import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import style from "./Login.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import AuthHeader from "../Header/AuthHeader";
import {useFormik} from "formik";
import closeIcon from "../../../../assets/icons/Close_MD.svg"
import { log } from 'console';
import { useAppDispatch } from '../../../../CustomHooks/UseAppDispatch';
import { createUserProfile, getUserProfileTC } from '../../../../BLL/AuthReducer';




/**
 * Типизация объекта ошибки валидации
 */
type ErrorsType = {
    email: string
    password: string
}
const Login = () => {
    /**
     * импортируем кастомный хук чтобы мы могли диспатчить любые экшены, в том числе и санки
     */
    const dispatch = useAppDispatch()
    /**
     * локальный стейт для показа ошибок валидации формы тольок при клике
     */
    const [showErrors, setShowErrors] = useState(false);
    const handleClickShowErrors = () => {
        setShowErrors(true);
      };
    /**
     * хук для редиректа
     */
    const navigate = useNavigate()
  
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
                 const requstData = {
                    login : values.email,
                    password : values.password
                 }
                 dispatch(getUserProfileTC(requstData))
                 navigate("/cabinet")
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
            console.log(errors)
            return errors;
        }
    });
    return (
        <div className={style.container}>
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
                               formik.errors.email
                                    ? style.errorInput
                                    : style.input
                            }
                        />
                        {formik.errors.email && showErrors && (
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

                        {formik.errors.password && showErrors && (
                            <div className={style.errorMessage}>
                                {formik.errors.password}
                            </div>
                        )}
                        <button type="submit" className={style.btn} onClick={handleClickShowErrors}>ВОЙТИ</button>
                    </form>
                    <div className={style.footer}>
                        <NavLink to={"/register"} className={style.registerLink}>Нет аккаунта?
                            Зарегистрируйтесь</NavLink>
                        <NavLink to={"/user/:id/recovery/:token"} className={style.recoverLink}>Забыли пароль?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;