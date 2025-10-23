import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  res.send('Register endpoint');
};

export const loginUser = async (req: Request, res: Response) => {
  res.send('Login endpoint');
};

export const logoutUser = async (req: Request, res: Response) => {
  res.send('Logout endpoint');
};

