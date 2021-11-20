import { ReturnInterface } from './../../../global/interfaces/responseInterface';
import { Auth } from './../authLogServices';
import { Request,Response } from "express";


/**
 * this 
 * @param req 
 * @param res 
 * @returns 
 */
export const loginUser = async (req: Request, res: Response) => {
    // the return result of userLogin 
    const result = <ReturnInterface>await Auth.userLogin(req.body);
    // pass the result to the res and statusCode and data response
    return res.status(result.statusCode).json(result.response);
}