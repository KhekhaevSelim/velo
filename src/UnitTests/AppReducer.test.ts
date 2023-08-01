import { AppStateType, appReducer, setLoadingAC, setNotifyMessageFailedAC, setNotifyMessageOkAC } from "../BLL/AppReducer";
let startState : AppStateType;
beforeEach(()=> {
    startState = {
        isLoading : false,
        notifyMessageFailed : "",
        notifyMessageOk : ""
        }
})
test("isLoading value should be - true", ()=> {
  
    const endState = appReducer(startState, setLoadingAC(true))
    expect(startState).not.toEqual(endState)
    expect(endState.isLoading).toBe(true)
    expect(startState.isLoading).toBe(false)
})

test("endState should be contain failed message", ()=> {
  
    const endState = appReducer(startState, setNotifyMessageFailedAC("some error message"))
    expect(startState).not.toEqual(endState)
    expect(endState.notifyMessageFailed).toBe("some error message")
    expect(startState.notifyMessageFailed).toBe("")
})

test("endState should be contain Ok message", ()=> {
  
    const endState = appReducer(startState, setNotifyMessageOkAC("some Ok message"))
    expect(startState).not.toEqual(endState)
    expect(endState.notifyMessageOk).toBe("some Ok message")
    expect(startState.notifyMessageOk).toBe("")
})