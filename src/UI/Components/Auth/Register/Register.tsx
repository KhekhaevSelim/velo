import React, {useState} from 'react';
import style from "./Register.module.css";
import AuthHeader from "../Header/AuthHeader";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";


type ErrorsType = {
    email: string
    password: string
    confirmPassword : string
}
const Register = () => {

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
            password: '',
            confirmPassword : ''
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
            if (values.confirmPassword && values.password !== values.confirmPassword) {
                errors.confirmPassword = "Пароли не совпадают. Попробуйте еще раз";
            }
            console.log(errors)
            return errors;
        },
    });

    return (
        <div className={style.container}>
            <AuthHeader/>
            <div className={style.registerContainer}>
                <div className={style.registerFormContainer}>
                    <h3>РЕГИСТРАЦИЯ</h3>
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
                            <i className='bx bx-show' onClick={handleClickShowPassword}></i>
                            {/*<span onClick={handleClickShowPassword}><img src="../../../../assets/icons/showPassSvg.svg" /></span>*/}
                        </div>

                        {formik.touched.password && formik.errors.password && (
                            <div className={style.errorMessage}>
                                {formik.errors.password}
                            </div>
                        )}
                        <div className={formik.touched.password && formik.errors.password
                            ? style.errorInput
                            : style.input}>
                            <input
                                style={{width : "95%"}}
                                type={showPassword ? "text" : "password"}
                                placeholder={"Подтвердите пароль"}
                                {...formik.getFieldProps("confirmPassword")}

                            />
                            <i className='bx bx-show' onClick={handleClickShowPassword}></i>
                            {/*<span onClick={handleClickShowPassword}><img src="../../../../assets/icons/showPassSvg.svg" /></span>*/}
                        </div>

                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <div className={style.errorMessage}>
                                {formik.errors.confirmPassword}
                            </div>
                        )}
                        <button type="submit" className={style.btn}>РЕГИСТРАЦИЯ</button>
                    </form>
                    <div className={style.footer}>
                        <NavLink to={"/login"} className={style.loginLink}>Уже зарегистрированы? Войти</NavLink>
                        <NavLink to={"/recoverPassword"} className={style.recoverLink}>Забыли пароль?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;