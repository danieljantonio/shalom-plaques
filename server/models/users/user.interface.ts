// interface to represent a user
interface IUser {
	name: string;
	email: string;
	phone: string;
	password: string;
	verifyPassword: (password: string) => boolean;
}

export default IUser;
