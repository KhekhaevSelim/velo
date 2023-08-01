import { AppThunkType } from "./Store"
import { APItodolist, CreateUserArgType, CreateUserResType, GetUserArgType, GetUserProfileResType } from "../DAL/Api"
import { setLoadingAC, setNotifyMessageFailedAC, setNotifyMessageOkAC } from "./AppReducer"


export type InitialStateType = {
    profileData : GetUserProfileResType | null
    regData : CreateUserResType | null
}
const profile : InitialStateType = {
profileData : null,
regData :  null
}
export const authReducer = ( state : InitialStateType = profile, action : ProfileActionsTypes ) : InitialStateType => {
    switch(action.type){
        case "SetUserRegData" : 
        return {...state, regData : action.userData}
        case "SetUserData" :
            return {...state, profileData : action.userData}
        default :
            return state
    }
}



export const setUserProfileAC = (userData : GetUserProfileResType) => {
  return  {type : "SetUserData", userData} as const
}

export const setUserRegDataAC = (userData : CreateUserResType) => {
    return  {type : "SetUserRegData", userData} as const
  }





export const getUserProfileTC = (getUserData : GetUserArgType) : AppThunkType => {
     return (dispatch) => {
        /**
         * зачищаем уведомления перед запросом, чтобы избежать их дублирование
         */
        dispatch(setNotifyMessageFailedAC(""))
        dispatch(setNotifyMessageOkAC(""))
        /**
         * Ставим состояние загрузки в момент запроса, ниже мы уберем линию прогресса как при удачном и неудачном запросе
         */
        dispatch(setLoadingAC(true))
        APItodolist.getUserProfile(getUserData)
        .then( res => {
        if(res.status === 200){
        /**
        * Закинем в стейт ответ сервера чтобы далее в компоненте Login проверять наличиние данного поля и редиректить в ЛК
        */
        dispatch(setUserProfileAC(res.data))
        /**
        * Убираем линию прогресса
        */
        dispatch(setLoadingAC(false))
        }
        }) 
        .catch(e=> {
         if(e.message === "Network Error"){
            /**
                * регистрируем ошибки в зависимости от причины в AppReducer чтобы далее в компоненте App выводить уведомления
                */
            dispatch(setNotifyMessageFailedAC("Ошибка сети, проверьте соединение"))
            dispatch(setLoadingAC(false))
         } else if(e.response.data.error = "User not found") {
            dispatch(setNotifyMessageFailedAC("Пользователь с таким E-mail или паролем не найден"))
            dispatch(setLoadingAC(false))
         }
        })
}}


export const createUserProfile = (createUserData : CreateUserArgType) : AppThunkType => {
    return (dispatch) => {
        /**
         * зачищаем уведомления перед запросом, чтобы избежать их дублирование
         */
        dispatch(setNotifyMessageFailedAC(""))
        dispatch(setNotifyMessageOkAC(""))
        /**
         * Ставим состояние загрузки в момент запроса, ниже мы уберем линию прогресса как при удачном и неудачном запросе
         */
        dispatch(setLoadingAC(true))
        
       APItodolist.createUserProfile(createUserData)
        .then( res => {
            if(res.status === 200){
                /**
                 * Закинем в стейт ответ сервера чтобы далее в компоненте Register проверять наличиние данного поля и редиректить на авторизацию
                 */
                dispatch(setUserRegDataAC(res.data)) 
               }
               dispatch(setLoadingAC(false))
           })
        .catch(e => {
            if(e.message === "Network Error"){
               /**
                * регистрируем ошибки в зависимости от причины в AppReducer чтобы далее в компоненте App выводить уведомления
                */
                dispatch(setNotifyMessageFailedAC("Ошибка сети, проверьте соединение"))
                dispatch(setLoadingAC(false))
            } else if(e.response.data.message === "User already created")
            dispatch(setNotifyMessageFailedAC("Такой пользователь существует"))
            dispatch(setLoadingAC(false))
        })  
}}

// ActionCreator types
export type ProfileActionsTypes = ReturnType<typeof setUserProfileAC> | ReturnType<typeof setUserRegDataAC> 

