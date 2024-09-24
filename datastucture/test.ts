declare module 'dtos/user' {
    export interface User {
        id: number;
        username: string;
        email: string;
    }

    export type UserRegisterReq = Omit<User , 'id'>;
    export type UserLoginReq = Omit<User , 'username'>;
}

declare module 'dtos/address' {
    export interface Address {
        id: number;
        street: string;
        city: string;
        state: string;
        country: string;
    }
    export type City = {
        name: string;
    }
}

declare module 'api-types' {}