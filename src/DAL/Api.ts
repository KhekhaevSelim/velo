import axios from "axios"

const instance = axios.create({
    baseURL: "https://velo-api.com",
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
    name ?: string
    surname ?: string,
    email ?: string,
    is_activated ?: boolean,
    created_at ?: string,
    subscribes ?: Array<any>
}

export type CreateUserResType = {
    id: number,
    email: string,
    code: string
}

export type ActivateUserResType = {
    email: string,
    login:string
}



// Request arg types
export type GetUserArgType = {
    email:string,
    password: string
}

export type CreateUserArgType = {
    email:string,
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