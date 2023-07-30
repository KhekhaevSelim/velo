import { ThunkAction } from "redux-thunk"
import { AppRootStateType } from "./Store"
import { APItodolist, CreateUserArgType, GetUserArgType } from "../DAL/Api"

export type InitialStateType = {
    id : string
    name : string
}
const profile : InitialStateType = {} as InitialStateType
export const authReducer = ( state : InitialStateType = profile, action : ProfileActionsTypes ) : InitialStateType => {
    switch(action.type){
        case "SetUserData" :
            return action.userData
        default :
            return state
    }
}

export const setUserProfileAC = (userData : any) => {
  return  {type : "SetUserData", userData} as const
}



export const getUserProfile = (getUserData : GetUserArgType) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return async (dispatch) => {
       let response = await APItodolist.getUserProfile(getUserData)
          dispatch(setUserProfileAC(response.data))
}}


export const createUserProfile = (createUserData : CreateUserArgType) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return async (dispatch) => {
       let response = await APItodolist.createUserProfile(createUserData)
          dispatch(setUserProfileAC(response.data))
}}

// ActionCreator types
export type ProfileActionsTypes = ReturnType<typeof setUserProfileAC>

