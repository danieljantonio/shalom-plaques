import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
	cleanEnv(process.env, {
		MONGO_URI: str(),
		JWT_SECRET: str(),
		PORT: port(),
	});
};

export default validateEnv;
