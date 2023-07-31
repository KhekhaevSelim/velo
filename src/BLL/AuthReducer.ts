import { AppThunkType } from "./Store"
import { APItodolist, CreateUserArgType, CreateUserResType, GetUserArgType, GetUserProfileResType } from "../DAL/Api"


export type InitialStateType = {
    profileData : GetUserProfileResType | null
    errorMessage : string
    showToast : boolean
    isInitialized : boolean
    regData : CreateUserResType | null
}
const profile : InitialStateType = {
profileData : null,
errorMessage : "", 
showToast : false,
isInitialized : false,
regData :  null
}
export const authReducer = ( state : InitialStateType = profile, action : ProfileActionsTypes ) : InitialStateType => {
    switch(action.type){
        //При регистрации возращается только логин(емайл)
        case "SetUserRegData" : 
        return {...state, regData : action.userData}
        // При входе возвращается вся инфа о пользователе
        case "SetUserData" :
            return {...state, profileData : action.userData}
        case "SetErrorMessage" :
            return {...state, errorMessage : action.errorMessage}
        case "ShowToast" :
            return {...state, showToast : action.isShow}   
        case"IsInitialized" : 
            return {...state, isInitialized : action.isInitialized}   
        default :
            return state
    }
}

export const isInitializedAC = (isInitialized : boolean) => {
    return  {type : "IsInitialized", isInitialized} as const
  }

export const showToastAC = (isShow : boolean) => {
    return  {type : "ShowToast", isShow} as const
  }

export const setUserProfileAC = (userData : GetUserProfileResType) => {
  return  {type : "SetUserData", userData} as const
}

export const setUserRegDataAC = (userData : CreateUserResType) => {
    return  {type : "SetUserRegData", userData} as const
  }

export const setErrorMessageAC = (errorMessage : string) => {
    return {
        type : "SetErrorMessage",
        errorMessage
    } as const
}



export const getUserProfileTC = (getUserData : GetUserArgType) : AppThunkType => {
     return (dispatch) => {
        APItodolist.getUserProfile(getUserData)
        .then( res => {
        if(res.status === 200){
        dispatch(setUserProfileAC(res.data))
       }
       }) 
       .catch(e=> {
        if(e.message === "Network Error"){
            dispatch(setErrorMessageAC(e.message))
        } else {
            dispatch(setErrorMessageAC(e.response.data.error))
        }
        
       })
}}


export const createUserProfile = (createUserData : CreateUserArgType) : AppThunkType => {
    return (dispatch) => {
       APItodolist.createUserProfile(createUserData)
        .then( res => {
            console.log(res)
            if(res.status === 200){
                dispatch(setUserRegDataAC(res.data)) 
               }
           })
        .catch(e => {
            if(e.message === "Network Error"){
                dispatch(setErrorMessageAC(e.message))
            } else if(e.response.data.message === "User already created")
            dispatch(setErrorMessageAC(e.response.data.message))
        })  
}}

// ActionCreator types
export type ProfileActionsTypes = ReturnType<typeof setUserProfileAC> | ReturnType<typeof setErrorMessageAC> | ReturnType<typeof showToastAC> 
| ReturnType<typeof isInitializedAC> | ReturnType<typeof setUserRegDataAC> 

