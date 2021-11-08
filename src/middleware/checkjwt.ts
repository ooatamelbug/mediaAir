import config from 'config';
// import functions from express and jsonwebtoken
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkJWT = async (req: Request, res: Response, next: NextFunction) => {
  // create variable and put in it the value of authorize token
  const token = req.headers.authorization
    ? <string>req.headers.authorization.split(" ")[1]
    : null;

  // check if the value of token
  if (token) {
    try {
        // verify token to check if is valid
        const decoded = await jwt.verify(token, config.get('jwt.secret'));
        


    } catch (error) {
        // return error message and with status code 401
        return res
                .status(401)
                .json({
                    success: false,
                    message: "",
                });
    }
  } else {
    // return error message and with status code 401
    return res
            .status(401)
            .json({
                success: false,
                message: "",
            });
  }
};
