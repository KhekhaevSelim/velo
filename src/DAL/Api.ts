import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.wattattack.ru/",
    withCredentials: true
})

// user-API
export const APItodolist = {
    getUserProfile(getUserModel : GetUserArgType) {
        return instance.post<GetUserProfileResType>("user/auth", getUserModel)
    },
    createUserProfile(createUserModel : CreateUserArgType) {
        return instance.post<CreateUserResType>("user/create", createUserModel)
    },
    me(token : string){
        return instance.post<meResType>("user", { token } )
    },
    activateUserProfile(activateUserModel : ActivateUserArgType) {
        return instance.post<ActivateUserResType>("user/activate", activateUserModel)
    },
    changeUserName(changeUserNameModel : changeUserNameArgType) {
        return instance.post("user/name", changeUserNameModel)
    },
    getCodeForRecover(email : string) {
        return instance.post("user/password/send", {email})
    },
    recoverPassword(recoverPasswordModel : recoverPasswordArgType) {
        return instance.post<string>("user/password", recoverPasswordModel)
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
    token : string | null
}
export type meResType = Omit<GetUserProfileResType, "token">

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

export type changeUserNameArgType = {
   token : string | null
   name : string,
   surname : string
    }

export type ActivateUserArgType = {
    login: string,
    password: string
    }
export type recoverPasswordArgType = {
    code: string,
    email:string,
    password: string
}
    ///http://velo-api.com/user/change смена пароля {
// "login":"string",
// "password":"string",
// "new_password": "string"
// }