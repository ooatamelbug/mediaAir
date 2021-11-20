import { UserMedelInterface } from "../../users/usersInterfaces";

export interface loginDataInterface {
    _id?: string;
    username?: string;
} 

export interface dataSendLoginInterface {
    token: string
    user: UserMedelInterface
}

export interface BodyLoginInterface {
    username: string;
    password: string;
}