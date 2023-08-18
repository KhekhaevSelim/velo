import { InitialStateType, authReducer, logoutAC, meAC, setUserProfileAC, setUserRegDataAC } from "../BLL/AuthReducer";

let startState : InitialStateType;
beforeEach(()=> {
    startState = {
        profileData : null,
        regData :  null
        }
})

test("when user sign in profileData should be contain him data", ()=> {
   let endState = authReducer(startState, setUserProfileAC( {  
   name : "Selim",
   surname : "Khekhaev",
   email : "selim16695@mail.ru",
   is_activated : false,
   created_at : "01.01.2023",
   subscribes : [],
   token : "qwerty123"
}))

   expect(startState).not.toEqual(endState);
   expect(startState.profileData).toBe(null);
   expect(endState.profileData?.created_at).toBe("01.01.2023");
   expect(endState.profileData?.surname).toBe("Khekhaev");
})

test("when user sign up regData should be contain him data", ()=> {
    let endState = authReducer(startState, setUserRegDataAC( {  
        id: 21,
        email: "selim16695@mail.ru",
        code: "qwerty12345"
    }))
 
    expect(startState).not.toEqual(endState);
    expect(startState.regData).toBe(null);
    expect(endState.regData?.email).toBe("selim16695@mail.ru");
    expect(endState.regData?.code).toBe("qwerty12345");
 })

 test("when user sending auth me request we should be have identical user data and token null", ()=> {
    let endState = authReducer(startState, meAC( {  
        name : "Selim",
        surname : "Khekhaev",
        email : "selim16695@mail.ru",
        is_activated : false,
        created_at : "01.01.2023",
        subscribes : []
    }))
 
    expect(startState).not.toEqual(endState);
    expect(endState.profileData?.email).toBe("selim16695@mail.ru");
 
 })

 test("if user click logout his profile data shoulb be empty", ()=> {
   startState = authReducer(startState, setUserProfileAC( {  
        name : "Selim",
        surname : "Khekhaev",
        email : "selim16695@mail.ru",
        is_activated : false,
        created_at : "01.01.2023",
        subscribes : [],
        token : "qwerty123"
     }))
    let endState = authReducer(startState, logoutAC())
 
    expect(startState.profileData).not.toEqual(endState.profileData);
    expect(endState.profileData).toBe(null);
 
 })