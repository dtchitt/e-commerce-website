import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createNewUser = async (username: string, password: string) => {
	const result = await prisma.users.create({
		data: {
			username,
			password,
		},
	});

	return result;
};
