import React from 'react';
import style from "./Login.module.css";
import {NavLink} from "react-router-dom";
import AuthHeader from "../Header/AuthHeader";
import { useFormik} from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
    });

    return (
        <div className={style.container}>
            <AuthHeader/>
            <div className={style.loginContainer}>
                <div className={style.loginFormContainer}>
                    <h3>Авторизация</h3>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <input
                            type="email"
                            placeholder={"Ваш e-mail"}
                            {...formik.getFieldProps("email")}
                        />
                        <input
                        type="password"
                        placeholder={"Пароль"}
                        {...formik.getFieldProps("password")}
                    />
                        <button type="submit" className={style.btn}>ВОЙТИ</button>
                    </form>
                    <div className={style.footer}>
                        <NavLink to={"/register"} className={style.registerLink}>Нет аккаунта?
                            Зарегистрируйтесь</NavLink>
                        <NavLink to={"/recoverPassword"} className={style.recoverLink}>Забыли пароль?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;