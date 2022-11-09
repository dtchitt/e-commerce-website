import { queryListOfUsers } from '../services/userServices';
import { Request, Response } from 'express';
export const getAllUsers = async (req: any, res: any) => {
	const userList = await queryListOfUsers();
	res.send(userList);
};

export const getUserByID = async (req: Request, res: Response) => {
	const user = await queryListOfUsers(Number(req.params.userID));
	res.send(user);
};
