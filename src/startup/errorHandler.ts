// import types from express and interface of custom ErrorExceptions
import { ErrorExceptions } from './../global/interfaces/error';
import {Request, Response, NextFunction } from 'express';

// function for handel errror 
export const handleError = async (
    req: Request,
    res: Response,
    next: NextFunction,
    error: ErrorExceptions
  ) => {
      // create variable for status error and data and path and time
      const statusError = req.statusCode || 500;
      const messageError = error.message;
      const DataError = error.data;
      const timeError = new Date().toISOString();
      const pathError = req.originalUrl;

      // get out the error data and ststus and other related data
      res.status(statusError).json({
        messageError,
        DataError,
        timeError,
        pathError
      });
  }