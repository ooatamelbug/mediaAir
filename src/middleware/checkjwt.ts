// import functions from express and jsonwebtoken
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "config";
import moment from "moment";
// import interfaces 
import { loginDataInterface } from './../components/authLogin/authLoginInterfaces/loginInterface';
import { LoginAuth } from "../components/authLogin/authLoginSchema";
import { LoginAuthInterface } from "../components/authLogin/authLoginInterfaces";

// create type for custom Request
export interface RequestData extends Request {
    user : loginDataInterface
}

/**
 * function for xheck auth token valid to go path
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export const checkJWT = async (
  req: RequestData,
  res: Response,
  next: NextFunction
) => {
  // create variable and put in it the value of authorize token
  const token = req.headers.authorization
    ? <string>req.headers.authorization.split(" ")[1]
    : null;

  // check if the value of token
  if (token) {
    try {
      // verify token to check if is valid
      const decoded = <loginDataInterface>await jwt.verify(token, config.get("jwt.secret"));
      // get the data of the token from LoginAuth model
      const getDataToken = <LoginAuthInterface>(
        await LoginAuth.findOne({ token: token , status: true})
      );
      // check if the status of token is false or have expries date
      if (getDataToken.status == false || getDataToken.expireDate != null) {
        // return error message and with status code 401
        return res.status(401).json({
          success: false,
          message: "the token you passes is expired!",
        });
      } else {
        // create variable hold the value of the date time now convert it to  toISOString
        // to easy to make on it operations
        let nowDate: Date = new Date();
        nowDate.toISOString;
        // get expire in time from config
        const expireTime = <string>config.get("jwt.expireIn");
        // convert date time to compare it with logindate to know if is gone
        const dateExpire: boolean = moment(nowDate).isAfter(
          moment(new Date(getDataToken.loginDate)).add(
            parseInt(expireTime.replace("/[A-Za-z]/g", ""))
          )
        );

        // check if is dateexpire is expired or not
        if (dateExpire) {
          // update the data of this token in  LoginAuth to be expire
          await LoginAuth.findOneAndUpdate(
            { token },
            { expireDate: new Date(), status: false }
          );
          // return error message and with status code 401
          return res.status(401).json({
            success: false,
            message: "the token you passes is expired!",
          });
        }
        // add data login to the req user 
        req.user = decoded;
        // go to next
        next();
      }
    } catch (error) {
      // return error message and with status code 401
      return res.status(401).json({
        success: false,
        message: "error in handle data",
      });
    }
  } else {
    // return error message and with status code 401
    return res.status(401).json({
      success: false,
      message: "no token passed !",
    });
  }
};
