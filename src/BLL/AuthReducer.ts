import { AppThunkType } from "./Store"
import { APItodolist, CreateUserArgType, GetUserArgType, GetUserProfileResType } from "../DAL/Api"


export type InitialStateType = {
    profileData : GetUserProfileResType 
    errorMessage : string
}
const profile : InitialStateType = {} as InitialStateType
export const authReducer = ( state : InitialStateType = profile, action : ProfileActionsTypes ) : InitialStateType => {
    switch(action.type){
        //При регистрации возращается только логин(емайл)
        case "SetLogin" : 
        return {...state, profileData : {
            ...state.profileData, email : action.login 
        }}
        // При входе возвращается вся инфа о пользователе
        case "SetUserData" :
            return {...state, profileData : action.userData}
        case "SetErrorMessage" :
            return {...state, errorMessage : action.errorMessage}
        default :
            return state
    }
}

export const setUserProfileAC = (userData : GetUserProfileResType) => {
  return  {type : "SetUserData", userData} as const
}

export const setErrorMessageAC = (errorMessage : string) => {
    return {
        type : "SetErrorMessage",
        errorMessage
    } as const
}
export const setLoginAC = (login : string) => {
    return {
        type : "SetLogin",
        login
    } as const
}


export const getUserProfileTC = (getUserData : GetUserArgType) : AppThunkType => {
    return (dispatch) => {
       APItodolist.getUserProfile(getUserData).then( res => {
        dispatch(setUserProfileAC(res.data))
       })
         
}}


export const createUserProfile = (createUserData : CreateUserArgType) : AppThunkType => {
    return (dispatch) => {
        APItodolist.createUserProfile(createUserData).then( res => {
            dispatch(setLoginAC(res.data))  
           })
           .catch(e => {
            console.log(e.message)
            dispatch(setErrorMessageAC(e.message))
        })  
}}

// ActionCreator types
export type ProfileActionsTypes = ReturnType<typeof setUserProfileAC> | ReturnType<typeof setErrorMessageAC> | ReturnType<typeof setLoginAC>

