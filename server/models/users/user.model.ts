import { Schema, model, Document, ObjectId } from 'mongoose';
import IUser from './user.interface';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser & Document>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	const salt = await bcrypt.genSalt(10); // 10 for testing
	const hash = await bcrypt.hash(this.password, salt);
	this.password = hash;
	next();
});

userSchema.methods.verifyPassword = async function (password: string) {
	const user: IUser = this.toObject();
	const isMatch = await bcrypt.compare(password, user.password);
	return isMatch;
};

const userModel = model<IUser & Document>('User', userSchema);

export default userModel;
