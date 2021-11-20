import { RequestData } from './checkjwt';
import { Request, Response, NextFunction } from 'express';

export const checkRolle = (role: string, type: string) =>{
    return async (req: RequestData,res: Response, next: NextFunction) => {
        // get the id of user
        const userId = <string>req.user._id;

        
    }
}