import express, { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import { createNewUser } from '../services/userServices';

const prisma = new PrismaClient();

// @desc 	Sign up a new user
// @route 	POST api/user
// @access	Public
export const signUpUser = asyncHandler(async (req: Request, res: Response) => {
	//body
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400);
		throw new Error('All fields required!');
	}

	// addUser service
	const newUser = await createNewUser(username, password);
	if (newUser!) {
		res.status(400);
		throw new Error('User failed to create');
	}

	res.json({ message: 'Signup User' });
});

// @desc 	Login user
// @route 	GET /api/user/login
// @access	Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
	//body
	res.json({ message: 'Login user' });
});

// @desc 	Get user data
// @route 	GET /api/user/me
// @access	Public
export const getUserData = asyncHandler(async (req: Request, res: Response) => {
	res.json({ message: 'Get user data' });
});
