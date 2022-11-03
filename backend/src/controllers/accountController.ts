//import { prisma } from '../../prisma/seed';
import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// @desc 	Sign up a new user
// @route 	POST api/user
// @access	Public
export async function signUpUser(req: Request, res: Response) {
	res.json({ message: 'Signup User' });
	//body
	/*
	const { username, password } = req.body;
	const result = await prisma.users.create({
		data: {
			username,
			password,
		},
	});
	*/
}

// @desc 	Login user
// @route 	GET /api/user/login
// @access	Public
export async function loginUser(req: Request, res: Response) {
	//body
	res.json({ message: 'Login user' });
}

// @desc 	Get user data
// @route 	GET /api/user/me
// @access	Public
export async function getUserData(req: Request, res: Response) {
	res.json({ message: 'Get user data' });
}
