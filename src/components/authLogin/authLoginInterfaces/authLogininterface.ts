// import from mongoose and UserMedelInterface
import { UserMedelInterface } from './../../users/usersInterfaces/userInterface';
import { Document, PopulatedDoc } from 'mongoose';

// create interface for AuthLogin model
export interface LoginAuthInterface extends Document {
    _id?: string;
    token?: string;
    status: boolean;
    expireDate: Date;
    userId?: PopulatedDoc<UserMedelInterface>;
    loginDate: Date;
    logoutDate?: Date;
}