// import some function from mongoose
import { Schema,Model, model } from 'mongoose';
// import interface from usersInterfaces
import { UserMedelInterface } from './usersInterfaces';

// make new UserSchema for user model to create the shape of mode and the data
const UserSchema: Schema = new Schema<UserMedelInterface>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    username: {
        type: String
    },
    password: {
        type: String,
        min: 8
    },
})

// export User model for use it and create model from UserSchema
export const User: Model<UserMedelInterface> = model('User', UserSchema);