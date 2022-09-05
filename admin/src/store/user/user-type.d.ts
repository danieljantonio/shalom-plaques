interface IUser {
	id?: string;
	name?: string;
	email?: string;
}

type UserState = {
	user?: IUser;
	isAuthenticated: boolean;
	token?: string;
};

type UserAction = {
	type: string;
	user?: IUser;
	token?: string;
};
