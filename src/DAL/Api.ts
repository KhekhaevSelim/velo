import axios from "axios"

const instance = axios.create({
    baseURL: "http://velo-api.com/",
    withCredentials: true
})

// user-API
export const APItodolist = {
    getUserProfile(getUserModel : GetUserArgType) {
        return instance.post<GetUserProfileResType>("user", getUserModel)
    },
    createUserProfile(createUserModel : CreateUserArgType) {
        return instance.post<CreateUserResType>("user/create", createUserModel)
    },
    activateUserProfile(activateUserModel : ActivateUserArgType) {
        return instance.post<ActivateUserResType>("user/activate", activateUserModel)
    },
}


// Response types

export type GetUserProfileResType = {
    username: string,
    login: string,
    created_at: string,
    subscribes: Array<any>
}

export type CreateUserResType = {
    name: string,
    login:string
}

export type ActivateUserResType = {
    name: string,
    login:string
}



// Request arg types
export type GetUserArgType = {
    login:string,
    password: string
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

    ///http://velo-api.com/user/change смена пароля {
// "login":"string",
// "password":"string",
// "new_password": "string"
// }