import { Request, Router } from 'express';
import IUser from '../models/users/user.interface';

export interface Controller {
	path: string;
	router: Router;
}

export interface IRequest extends Request {
	user?: IUser;
}

export interface FileProps {
	fieldname: string;
	originalname: string;
	encoding: string;
	mimetype: string;
	destination: string;
	filename: string;
	path: string;
	size: number;
}
