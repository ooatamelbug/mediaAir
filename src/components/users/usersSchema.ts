// import some function from mongoose
import { Schema, Model, model } from "mongoose";
// import interface from usersInterfaces
import { UserMedelInterface } from "./usersInterfaces";

// make new UserSchema for user model to create the shape of mode and the data
const UserSchema: Schema = new Schema<UserMedelInterface>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
      min: 8,
    },
    imageProfile: {
      type: String,
    },
    educations: {
      elmantrySchool: {
        name: {
          type: String,
        },
        date: Date,
      },
      scondarySchool: {
        name: {
          type: String,
        },
        date: Date,
      },
      highSchool: {
        name: {
          type: String,
        },
        date: Date,
      },
    },
    collages: [
      {
        title: String,
        collageName: String,
        date: Date,
        degree: String,
      },
    ],
  },
  { timestamps: true }
);

// export User model for use it and create model from UserSchema
export const User: Model<UserMedelInterface> = model("User", UserSchema);
