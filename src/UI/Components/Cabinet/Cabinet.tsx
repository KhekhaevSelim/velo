import React, { useEffect, useState } from 'react';
import style from "./Cabinet.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import notify from "../../../assets/icons/notifyIcon.svg";
import exit from "../../../assets/icons/exitIcon.svg";
import attention from "../../../assets/icons/attention.svg";
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../BLL/Store';
import { GetUserProfileResType } from '../../../DAL/Api';
import { useAppDispatch } from '../../../CustomHooks/UseAppDispatch';
import { useFormik } from 'formik';
import { changeUserName, logoutAC, meTC } from '../../../BLL/AuthReducer';


const Cabinet = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  /**
      * Достаем из стейта данные пользователя
      */
  const profileData = useSelector<AppRootStateType, GetUserProfileResType | null>(state => state.AuthReducer.profileData);


  /**
     хук для условного рендеринга иконки меню
     */
     const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
     /**
      * хук для условного рендеринга активного и неактивного мобильного меню
      */
     const [isActiveNav, setIsActiveNav] = useState<boolean>(false);
     /**
      * функции для данмического изменения внешнего вида и иконки мобильного меню
      */
     const handleClickMenu = () => {
         setIsActiveMenu(!isActiveMenu)
         setIsActiveNav(!isActiveNav)
     }
     const handleClickLink = () => {
         setIsActiveMenu(!isActiveMenu)
         setIsActiveNav(!isActiveNav)
     }

    const logout = () => {
      localStorage.removeItem('jwtToken');
      dispatch(logoutAC())
      navigate("/login");
    }
   
  /**
   * костамизируем селект из библиотеки 'react-select' под наш дизайн
   */
  const customStyles = {
    control: (provided : any, state : any) => ({
      ...provided,
      borderRadius: 8,
      borderColor: state.isFocused ? '#ea5521' : '#ccc',
      boxShadow: state.isFocused ? '0 0 0 2px #ea5521' : 'none',
      margin: '10px 0 20px 0',
      '&:hover': {
        borderColor: '#ea5521',
      },
    }),
    option: (provided : any, state : any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#ea5521' : 'white',
      color: state.isFocused ? 'white' : 'black',
      fontFamily: "Helvetica",
      fontStyle: 'normal', 
      fontSize : '14px',
      fontWeight: '600',
    }),
    menu: (provided : any) => ({
      ...provided,
      marginTop: 0,
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontFamily: "Helvetica",
      fontStyle: 'normal', 
      color: '#111F28',
      fontSize : '14px',
      fontWeight: '600',
    }),
  };
  /**
   * передадим объект пропсами в селект
   */
  const options = [
    { value: 'Без подписки', label: 'Без подписки' },
    { value: 'Месячная подписка', label: 'Месячная подписка' },
    { value: 'Недельная подписка', label: 'Недельная подписка' },
    { value: 'Дневная подписка', label: 'Дневная подписка' },
  ];
  
  const formik = useFormik({
    initialValues: {
        name: profileData?.name,
        surname: profileData?.surname
    },
    onSubmit: values => {
      const token  = localStorage.getItem('jwtToken') as string;
      const reqData = {
        token : token as string,
        name : values.name  ? values.name : profileData?.name as string,
        surname : values.surname ? values.surname : profileData?.surname as string
      }
             dispatch(changeUserName(reqData))     
            
    },
});
useEffect(()=> {
const token  = localStorage.getItem('jwtToken') as string;
dispatch(meTC(token))
},[])
    return (
        <div className={style.container}>
          
          {
                /**
                 * условный рендеринг мобильного меню : свернутое и развернутое при клике по иконке меню
                 */
                isActiveNav ?
                    <nav className={style.mobileNavFul}>
                        <div className={style.mobileNavHeader}>
                            <h3>WattAttack</h3>
                            <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon}
                               onClick={handleClickMenu}></i>
                        </div>
                        <NavLink to="/#howStart" onClick={handleClickLink}>КАК НАЧАТЬ</NavLink>
                        <NavLink to="/#routes" onClick={handleClickLink}>МАРШРУТЫ</NavLink>
                        <NavLink to="/#training" onClick={handleClickLink}>ТРЕНИРОВКИ</NavLink>
                        <NavLink to="/#about" onClick={handleClickLink}>О НАС</NavLink>
                        <NavLink to="/#help" onClick={handleClickLink}>ПОМОЩЬ</NavLink>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>

                    </nav>
                    :
                    <nav className={style.mobileNavPart}>
                        <NavLink to={"/#howStart"}>КАК НАЧАТЬ</NavLink>
                        <NavLink to={"/login"}>ВОЙТИ</NavLink>
                        <NavLink to={"/download"}>СКАЧАТЬ</NavLink>
                        <i className={`bx ${isActiveMenu ? "bx-x" : "bx-menu"}`} id={style.menuIcon}
                           onClick={handleClickMenu}></i>
                    </nav>
            }
            <div className={style.wrapper}>
              <div className={style.navBar}>
                    <NavLink className={style.navItem} to="/#howStart">КАК НАЧАТЬ</NavLink>
                    <NavLink className={style.navItem} to="/#routes">МАРШРУТЫ</NavLink>
                    <NavLink className={style.navItem} to="/#training">ТРЕНИРОВКИ</NavLink>
                    <NavLink className={style.navItem} to="/#about">О НАС</NavLink>
                    <NavLink className={style.navItem} to="/#help">HELP</NavLink>
                    <NavLink className={style.navItem} to={"/login"}>LOGIN</NavLink>
                    <NavLink className={style.navItem} to={"/download"}>СКАЧАТЬ</NavLink>
              </div>
            </div>
            <div className={style.navLine}>
              <div className={style.wrapper}>
                <div className={style.line}>
                    <h1>
                    WattAttack
                    </h1>
                    <div className={style.lineRight}>
                        <div className={style.lineRightTop}>
                          <div className={style.userDara}>
                             <span className={style.name}>{profileData?.name} {profileData?.surname}</span>
                          </div>
                          <div className={style.lineBtns}>
                            <img src={notify} alt="notify"/>
                            <img src={exit} alt="exit" onClick={logout}/>
                          </div>
                        </div>
                        <span className={style.email}>{profileData?.email}</span>           
                    </div>
                </div>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit} className={style.form}>
            <div className={style.content}>
               <div className={style.wrapper}>
                <div className={style.contentFlexBox}>
                 <div className={style.personalData}>
                   <div className={style.title}>
                     <p>
                     Личные данные
                     </p>
                     <img src={attention} alt="attention" />
                   </div>
                   {/* <input type="text" placeholder={profileData?.name}/>
                    */}
                    
                   <input
                            type="text"
                            placeholder={profileData?.name}
                            {...formik.getFieldProps("name")}
                            />
                   {/* <input type="text" placeholder={profileData?.surname}/> */}

                   <input
                            type="text"
                            placeholder={profileData?.surname}
                            {...formik.getFieldProps("surname")}
                            />


                   <input type="email" placeholder='E-mail' disabled/>
                   {/* <div className={style.password}>
                     <span>Пароль</span>
                     <span>Забыли пароль?</span>
                   </div>
                   <input type="password" placeholder='Старый пароль'/>
                   <input type="password" placeholder='Новый пароль'/>
                   <input type="password" placeholder='Подтвердите новый пароль'/>
                   <button className={style.btn}>
                        ИЗМЕНИТЬ ПАРОЛЬ
                   </button> */}
                 </div>
                 {/* <div className={style.clubData}>
                   <div className={style.title}>
                       <p>
                       Клуб, команда и тренер
                       </p>
                       <img src={attention} alt="attention" />
                   </div>
                   <input type="text" placeholder='Название клуба'/>
                   <input type="text" placeholder='Название команды'/>
                   <input type="email" placeholder='Ваш тренер WattAttack'/>
                   <div className={style.binding}>
                     <span>Привязка</span>
                     <img src={attention} alt="info" />
                   </div>
                   <div className={style.boxContainer}>
                    <div className={style.boxWrapper}>
                      <div className={style.box1}></div>
                      <div className={style.ellipse1}>
                         <img src={close} alt="close" />
                      </div>
                    </div>
                    <div className={style.boxWrapper}>
                      <div className={style.box2}></div>
                      <div className={style.ellipse2}>
                         <img src={done} alt="close" />
                      </div>
                    </div>
                    <div className={style.boxWrapper}>
                      <div className={style.box3}></div>
                      <div className={style.ellipse3}>
                         <img src={close} alt="close" />
                      </div>
                    </div>
                   </div>
                 </div> */}
                 <div className={style.rateData}>
                   <div className={style.title}>
                     <p>
                     Мой тариф
                     </p>
                     <img src={attention} alt="attention" />
                     <span className={style.rateFinishDate}>
                       до 12.12.2023
                     </span>
                   </div>
                   <Select 
                   options={options}
                   styles={customStyles}
                   placeholder="Название тарифа"
                   />
                   <button className={style.btn}>
                     ИЗМЕНИТЬ ТАРИФ
                   </button>
                   {/* <div className={style.approval}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.autoRenewal}>Автопродление включено</span>
                    </div> */}
                    <span className={style.pushNotify}>
                       Push-уведомления на телефон
                    </span>
                    <div className={style.approval}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                                Мои события (напоминания)
                            </span>
                    </div>
                    <div className={style.approval}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                               Начало тренировки друга
                            </span>
                    </div>
                    <div className={style.approval}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                               Сообщения от клуба/команды/тренера
                            </span>
                    </div>
                    <input type="password" placeholder='Номер телефона' className={style.phoneNumInput}/>
                 </div>
                 <div className={style.emailNotifySetting}>
                    <div className={style.title}>
                      <p>
                        Уведомления на e-mail
                      </p>
                    </div>
                    <div className={style.approval2}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                               Мои события (напоминания)
                            </span>
                    </div>
                    <div className={style.approval2}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                               Сообщения от клуба/команды/тренера
                            </span>
                    </div>
                    <div className={style.approval2}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                               Объявления (выход новой версии, события и пр.)
                            </span>
                    </div>
                    <div className={style.approval2}>
                            <label htmlFor="" className={style.customCheckBox}>
                                <input 
                                // checked={formik.values.isChecked}
                                    //    onChange={handleCheckboxChange}
                                       type="checkbox" className={style.hiddenInput}/>
                                <span className={style.checkBoxIcon}></span>
                            </label>
                            <span className={style.pushNotifyText}>
                               Предложения и подсказки (скидки, магазин и т.д.)
                            </span>
                    </div>
                    <div className={style.btnsContainer}>
                        {/* <button className={style.btn}>
                            ИСТОРИЯ ПОКУПОК И ОПЛАТ
                        </button> */}
                        <button className={style.btn} type='submit'>
                            СОХРАНИТЬ ВСЕ ИЗМЕНЕНИЯ
                        </button>
                       
                        {/* <button className={style.btn}>
                           УДАЛИТЬ АККАУНТ
                        </button> */}
                    </div>
                 </div>
               </div>
               
               </div>
               
            </div>
            </form>
        </div>
    );
};

export default Cabinet;


