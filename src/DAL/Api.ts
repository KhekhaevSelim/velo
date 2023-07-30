import axios from "axios"

const instance = axios.create({
    baseURL: "https://gdl-test-02.site/",
    withCredentials: true
})

// user-API
export const APItodolist = {
    getUserProfile(getUserModel : GetUserArgType) {
        return instance.post<GetUserProfileResType>("user", getUserModel)
    },
    createUserProfile(createUserModel : CreateUserArgType) {
        return instance.post<string>("user/create", createUserModel)
    },
    activateUserProfile(activateUserModel : ActivateUserArgType) {
        return instance.post<ActivateUserResType>("user/activate", activateUserModel)
    },
}


// Response types

export type GetUserProfileResType = {
    name : string
    username: string,
    email: string,
    is_activated : boolean,
    created_at: string,
    subscribes: Array<any>
}

export type CreateUserResType = {
    login : string
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
    login : string
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