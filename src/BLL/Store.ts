import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux"
import thunk, { ThunkAction } from "redux-thunk"

const rootReducer = combineReducers({
 
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;