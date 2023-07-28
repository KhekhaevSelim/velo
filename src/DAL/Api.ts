import axios from "axios"

const instance = axios.create({
    baseURL: "http://velo-api.com/",
    withCredentials: true
})

// user-API
export const APItodolist = {
    getUserProfile() {
        return instance.post<any>("user")
    },
    createUserProfile(createUserModel : CreateUserArgType) {
        return instance.post<any>("user/create", createUserModel)
    },
    activateUserProfile(activateUserModel : ActivateUserArgType) {
        return instance.post<any>("user/create", activateUserModel)
    },
}


export type CreateUserArgType = {
    name: string,
    login:string,
    password: string
    }
export type ActivateUserArgType = {
    login: string,
    password: string
    }