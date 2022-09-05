import jwt from 'jsonwebtoken';

const jwtConfig = {
	expiresIn: '18h',
};

const secret: string = process.env.JWT_SECRET || '';

export const createToken = (id: string) => {
	return jwt.sign({ id }, secret, jwtConfig);
};

export const verifyToken = (token: string) => {
	try {
		const decoded = jwt.verify(token, secret);
		return decoded;
	} catch (error) {
		throw Error('Wrong Token');
	}
};
