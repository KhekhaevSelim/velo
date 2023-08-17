export type AppStateType = {
    isLoading : boolean,
    notifyMessageFailed : string,
    notifyMessageOk : string,
}

const appState : AppStateType = {
    isLoading : false,
    notifyMessageFailed : "",
    notifyMessageOk : ""
}

export const appReducer = (state : AppStateType = appState, action : AppReducerACTypes) : AppStateType => {
    switch(action.type) {
        case "SetLoading" : 
        return {...state, isLoading : action.isLoading}
        case "ShowNotifyFailed" : 
        return {...state, notifyMessageFailed : action.notifyMessageFailed}
        case "ShowNotifyOk" : 
        return {...state, notifyMessageOk : action.notifyMessageOk}
        default : 
        return state
    }
}


export const setLoadingAC = (isLoading : boolean) => {
    return {
        type : "SetLoading",
        isLoading
    } as const
}

export const setNotifyMessageFailedAC = (notifyMessageFailed : string) => {
    return {
        type : "ShowNotifyFailed",
        notifyMessageFailed
    } as const
}

export const setNotifyMessageOkAC = (notifyMessageOk : string) => {
    return {
        type : "ShowNotifyOk",
        notifyMessageOk
    } as const
}

// Action Creator Types

export type AppReducerACTypes = ReturnType<typeof setLoadingAC> | ReturnType<typeof setNotifyMessageFailedAC> | ReturnType<typeof setNotifyMessageOkAC>