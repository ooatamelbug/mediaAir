import { ReturnInterface } from './../../../global/interfaces/responseInterface';
import { LoginAuth } from '../authLoginSchema';
import moment from "moment";
import { User } from "../../users/usersSchema";
import { ResponseInterface } from "../../../global/interfaces/responseInterface";
import { UserMedelInterface } from "../../users/usersInterfaces";
import { BodyLoginInterface } from "../authLoginInterfaces";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

export class Auth {
  static async userLogin(body: BodyLoginInterface) {
    // initalize the response and statusCode
    let response: ResponseInterface = {};
    let statusCode: number = 200;
    try {
      // get data from body
      const { username, password } = body;
      // sure if this username is exist
      const userExist = <UserMedelInterface>await User.findOne({ username });
      // check if not user Exist
      if (!userExist) {
        // change the  statusCode to 404 and add message to response
        statusCode = 404;
        response.message = "there is no user have in system!";
      } else {
        // check password is same in db or not
        const verifyPassword = <boolean>(
          await bcrypt.compare(password, userExist.password)
        );
        // check if  verifyPassword is false
        if (!verifyPassword) {
          // change the  statusCode to 404 and add message to response
          statusCode = 404;
          response.message = "the password is wrong!";
        } else {
          // generate token from user data
          const token = <string>(
            await jwt.sign(
              { _id: userExist._id, username: userExist.username },
              config.get("jwt.secret"),
              { expiresIn: config.get("jwt.expireIn") }
            )
          );
          // create variable loginTime formate date 
          const loginTime = <string>(
            moment(new Date()).utc().format("YYYY-MM-DD HH:mm:ss")
          );
          // create variable expireTime formate date 
          const expireTime = <string>moment(new Date())
            .add(parseInt(config.get("jwt.expireIn")), "hours")
            .utc()
            .format("YYYY-MM-DD HH:mm:ss");
          // save data login 
          const newLogin = new LoginAuth({
            token: token,
            userId: userExist._id,
            loginDate: loginTime,
            expireDate: expireTime,
            status: true,
          });
          await newLogin.save();
          // response data and statusCode that will return
          statusCode = 200;
          response.message = "";
          response.token = token;
          response.userData = {
              _id: userExist._id,
              firstName: userExist.firstName,
              lastName: userExist.lastName,
              image: userExist.imageProfile
          };
        }
      }
    } catch (error) {
      // change the  statusCode to 500 and add message to response
      statusCode = 500;
      response.message = "error in data";
    }
    // return the response and statusCode
    return { response, statusCode };
  }
}
