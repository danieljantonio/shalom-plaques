import * as express from 'express';
import { returnResponse } from '../helpers/res.helpers';
import User from '../models/users/user.model';
import { IRequest } from '../types/common';

class UserController {
	public path = '/user/';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.get(this.path, this.getUser);
		this.router.get(this.path, this.getUsers);
	};

	getUsers = async (_: IRequest, res: express.Response) => {
		try {
			const users = await User.find().lean().exec();
			returnResponse(200, res, users);
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to fetch users', errorLog: error });
		}
	};

	getUser = async (req: IRequest, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const user = await User.findOne({ _id: id }).lean().exec();
			if (!user) throw Error('User not found');
			returnResponse(200, res, user);
		} catch (error) {
			returnResponse(500, res, { error: `Failed to fetch user ${id}`, errorLog: error });
		}
	};
}

export default UserController;
