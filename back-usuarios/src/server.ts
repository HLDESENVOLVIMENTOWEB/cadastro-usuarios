import express, { Request, Response, NextFunction } from 'express';
var cors = require('cors')


import "express-async-errors";

import "./database";

import { router } from './routes';

import { AppError } from './errors/AppError';

import "./shared/container";

const app = express();

app.use(cors())


app.use(express.json());

app.use(router);

app.use((err:Error,request: Request, response:Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status:"error",
        message:`Internal server error - ${err.message}`,
    })
} )

app.listen(3333, () => console.log("Server is runing!"));