// import ResponseInterface and Schema and some of express package functions
import { ResponseInterface } from "./../global/interfaces/responseInterface";
import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";

export const validateSchema = (schema: Schema, property: string) => {
  // return the function handle request validate
  return async (req: Request, res: Response, next: NextFunction) => {
    // create variable data for put data request in it
    let data: any = {};
    // check if request of property is exiest and it have values
    if (
      req[property as keyof Request] &&
      Object.keys(req[property as keyof Request]).length > 0
    ) {
      // put this request of property in data
      data = req[property as keyof Request];
    }
    // make schema validate sure and validate data
    const result = schema.validate(data, {
      abortEarly: false,
      allowUnknown: false,
      convert: true,
    });
    // check if result have error
    if (result.error) {
      // put the Response data in responseData with  data error
      const responseData = <ResponseInterface>{
        success: false,
        message: "",
        data: [result.error],
      };
      // return Response with status and responseData
      return res.status(422).json(responseData);
    } else {
      // move to the next step
      next();
    }
  };
};
