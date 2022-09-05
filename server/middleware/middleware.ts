import express from 'express';
import IUser from '../models/users/user.interface';
import User from '../models/users/user.model';
import jwt from 'jsonwebtoken';

import { Request } from 'express';

interface RequestWithUser extends Request {
	user?: IUser;
}

export const middleware = async (req: RequestWithUser, res: express.Response, next: express.NextFunction) => {
	try {
		if (!req.cookies.__at) return next();
		const secret: any = process.env.JWT_SECRET;
		const verify = await jwt.verify(req.cookies.__at, secret);
		res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
		if (!req.user) {
			const _user = await User.find();
		}
		next();
	} catch (error) {
		next();
	}
};
