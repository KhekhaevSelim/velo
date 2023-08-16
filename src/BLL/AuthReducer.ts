import { AppThunkType } from "./Store"
import { APItodolist, CreateUserArgType, CreateUserResType, GetUserArgType, GetUserProfileResType, changeUserNameArgType } from "../DAL/Api"
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
       
        dispatch(setNotifyMessageFailedAC(""))
        dispatch(setNotifyMessageOkAC(""))
        
        dispatch(setLoadingAC(true))
        APItodolist.getUserProfile(getUserData)
        .then( res => {
        if(res.status === 200){
      
        dispatch(setUserProfileAC(res.data))
       
            dispatch(setLoadingAC(false))
            localStorage.setItem('userPassword', getUserData.password);
            localStorage.setItem('userEmail', getUserData.email);
         }
        }) 
        .catch(e=> {
         if(e.message === "Network Error"){

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
        dispatch(setNotifyMessageFailedAC(""))
        dispatch(setNotifyMessageOkAC(""))
        dispatch(setLoadingAC(true))
        
       APItodolist.createUserProfile(createUserData)
        .then( res => {
            if(res.status === 200){
               
                dispatch(setUserRegDataAC(res.data)) 
               }
               dispatch(setLoadingAC(false))
           })
        .catch(e => {
            if(e.message === "Network Error"){
              
                dispatch(setNotifyMessageFailedAC("Ошибка сети, проверьте соединение"))
                dispatch(setLoadingAC(false))
            } else if(e.response.data.message === "User already created")
            dispatch(setNotifyMessageFailedAC("Такой пользователь существует"))
            dispatch(setLoadingAC(false))
        })  
}}

export const changeUserName = (changeUserNameData : changeUserNameArgType) : AppThunkType => {
    return (dispatch) => {
       
        dispatch(setNotifyMessageFailedAC(""))
        dispatch(setNotifyMessageOkAC(""))
       
        dispatch(setLoadingAC(true))
        
       APItodolist.changeUserName(changeUserNameData)
        .then( res => {
            if(res.status === 200){
                window.location.reload();
               }
               dispatch(setLoadingAC(false))
           })
        .catch(e => {
            if(e.message === "Network Error"){
                dispatch(setNotifyMessageFailedAC("Ошибка сети, проверьте соединение"))
                dispatch(setLoadingAC(false))
            } 
            // else if(e.response.data.message === "User already created")
            // dispatch(setNotifyMessageFailedAC("Такой пользователь существует"))
            // dispatch(setLoadingAC(false))
        })  
}}
// ActionCreator types
export type ProfileActionsTypes = ReturnType<typeof setUserProfileAC> | ReturnType<typeof setUserRegDataAC> 

