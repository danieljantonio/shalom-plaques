import * as express from 'express';
import { createToken } from '../helpers/auth.helpers';
import { returnResponse } from '../helpers/res.helpers';
import User from '../models/users/user.model';

class AuthController {
	public path = '/auth';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.post(`${this.path}/register`, this.register);
		this.router.post(`${this.path}/login`, this.login);
	};

	register = async (req: express.Request, res: express.Response) => {
		try {
			const { name, email, phone, password }: { name: string; email: string; phone: string; password: string } = req.body;

			const user = await User.findOne({ email }).exec();
			if (user) return returnResponse(403, res, { error: `Email ${email} already has an associated account with it` });

			const newUser = new User({
				name,
				email,
				phone,
				password,
			});

			const saved = await newUser.save();
			if (!saved) throw { error: 'Failed to save new user' };

			const token = createToken(newUser._id);
			res.cookie('__at', token, { httpOnly: true, maxAge: 86400 * 1000 });
			returnResponse(200, res, { token, message: 'User has been registered', user });
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to register user', errorLog: error });
		}
	};

	login = async (req: express.Request, res: express.Response) => {
		try {
			const { email, password }: { email: string; password: string } = req.body;
			const user = await User.findOne({ email }).exec();

			if (!user) return returnResponse(403, res, { error: `Email ${email} not registered` });
			if (!(await user.verifyPassword(password))) return returnResponse(403, res, { error: `Wrong password` });

			const token = createToken(user._id);
			res.cookie('__at', token, { httpOnly: true, maxAge: 86400 * 1000 });
			returnResponse(200, res, { token, message: 'User has is now logged in', user });
		} catch (error) {
			returnResponse(500, res, { error: 'Error logging in', errorLog: error });
		}
	};
}

export default AuthController;
