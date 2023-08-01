import {ChangeEvent, useEffect, useState} from 'react';
import style from "./Register.module.css";
import AuthHeader from "../Header/AuthHeader";
import {useFormik} from "formik";
import {NavLink} from "react-router-dom";

import {useNavigate} from "react-router-dom"
import { useAppDispatch } from '../../../../CustomHooks/UseAppDispatch';
import { createUserProfile } from '../../../../BLL/AuthReducer';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../BLL/Store';
import { CreateUserResType } from '../../../../DAL/Api';
import { setNotifyMessageOkAC } from '../../../../BLL/AppReducer';


const Register = () => {
    /**
     * Получаем данные из стейта
     */
    const regUserData = useSelector<AppRootStateType, CreateUserResType | null>(state => state.AuthReducer.regData );
     /**
     * импортируем кастомный хук чтобы мы могли диспатчить любые экшены, в том числе и санки
     */
     const dispatch = useAppDispatch();
     
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

    /**
     * функция для проверки соотвествия емейла стандарту
     */
    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleCheckboxChange = (event : ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        formik.setFieldValue('isChecked', checked);
    };
    /**
     * хук обработки формы, отправки данных, валидации
     */
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword : '',
            isChecked : false
        },
        onSubmit: values => {
            const regData = {
                email : values.email,
                password : values.password
            }
             dispatch(createUserProfile(regData))
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
            if(!values.confirmPassword){
                errors.confirmPassword = "Пожалуйста, подтвердите пароль";
            } else if (values.confirmPassword && values.password !== values.confirmPassword) {
                errors.confirmPassword = "Пароли не совпадают. Попробуйте еще раз";
            }
            if(!values.isChecked){
                errors.isChecked = "error"
            }          
            return errors;
        },
    });
    /**
     * при успешном ответе от сервера мы задичпатчили в санке ответ в стейт, и если в стейте полe profileData не равно инициализационному null, то мы редиректим его
     * 
     */
 useEffect(()=> {
    if(regUserData !== null){
        dispatch(setNotifyMessageOkAC("Вы успешно зарегистрировались, Вам на почту отправлена ссылка на подтверждение E-mail"))
        const timer = setTimeout(()=> {
            navigate("/login");
        },1000)
        return () => clearTimeout(timer);
    }
}, [regUserData])

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
                            <i className='bx bx-show' onClick={handleClickShowPassword}></i>
                            {/*<span onClick={handleClickShowPassword}><img src="../../../../assets/icons/showPassSvg.svg" /></span>*/}
                        </div>

                        { formik.errors.password && showErrors && (
                            <div className={style.errorMessage}>
                                {formik.errors.password}
                            </div>
                        )}
                        <div className={formik.errors.password
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

                        {formik.errors.confirmPassword && showErrors && (
                            <div className={style.errorMessage}>
                                {formik.errors.confirmPassword}
                            </div>
                        )}
                        <div className={style.approval}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input checked={formik.values.isChecked}
                                       onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <NavLink to={"/login"} className={style.loginLink} style={{marginLeft : "10px"}}>Согласен на обработку персональных данных</NavLink>
                        </div>
                        <button type="submit" className={style.btn} onClick={handleClickShowErrors}>РЕГИСТРАЦИЯ</button>
                    </form>
                    <div className={style.footer}>
                        <NavLink to={"/login"} className={style.loginLink}>Уже зарегистрированы? Войти</NavLink>
                        <NavLink to={"/user/:id/recovery/:token"} className={style.recoverLink}>Забыли пароль?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;