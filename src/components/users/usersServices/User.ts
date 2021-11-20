import { UserMedelInterface } from './../usersInterfaces/userInterface';
import { ParamInterface } from "./../usersInterfaces";
import bcrypt from "bcryptjs";
import { User } from "../usersSchema";
import config from "config";
import { ResponseInterface } from "../../../global/interfaces/responseInterface";

class Users {
  static async getUsers(params: ParamInterface) {
    // initalize the response and statusCode
    let response: ResponseInterface = {};
    let statusCode: number = 200;
    try {
      // get data from params
      const { skip, sort, limit } = params;
      const skipData = skip ? skip : 0;
      const limitData = limit ? limit : 10;
      const select = "-password";
      const userdata: Array<UserMedelInterface> = await User.find({}, select)
        .limit(limitData)
        .sort(sort)
        .skip(skipData);
      // pass data and  statusCode value and message
      statusCode = 200;
      response.data = userdata;
      response.message = "";
    } catch (error) {
      // change the  statusCode to 500 and add message to response
      statusCode = 500;
      response.message = "error in data";
    }
    // return the response and statusCode
    return { response, statusCode };    
  }
}
