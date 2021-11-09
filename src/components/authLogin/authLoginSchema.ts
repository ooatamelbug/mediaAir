// import some function from mongoose
import { Schema, Model, model } from 'mongoose';
// import interface from usersInterfaces
import { LoginAuthInterface } from './authLoginInterfaces';

// make new loginSchema for user model to create the shape of mode and the data
const loginSchema: Schema = new Schema<LoginAuthInterface>({
    token: {
        type: String,
        required: true,
        unique: true
    },
    loginDate: {
        type: Date,
    },
    logoutDate: {
        type: Date
    },
    expireDate: {
        type: Date
    },
    status: {
        type: Boolean,
        default: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
}, { timestamps: true });

// export LoginAuth model for use it and create model from loginSchema
export const LoginAuth: Model<LoginAuthInterface> = model('LoginAuth', loginSchema);