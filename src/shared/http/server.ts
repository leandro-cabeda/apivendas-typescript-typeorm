import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import router from '@shared/http/routes';
import "@shared/typeorm";

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal Server Error',
  });
});


app.use(router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

