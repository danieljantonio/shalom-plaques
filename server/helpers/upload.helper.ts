import multer from 'multer';
import IProduct from '../models/products/product.interface';
import { FileProps } from '../types/common';
import fs from 'fs-extra';

const storage = multer.diskStorage({
	destination: (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
		callback(null, './temp/uploads');
	},
	filename: (req: Express.Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
		callback(null, file.originalname);
	},
});

const fileFilter = (req: any, file: any, callback: any) => {
	const allowedFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
	if (allowedFileTypes.includes(file.mimetype)) return callback(null, true);
	return callback(new Error('Image uploaded needs to have a jpeg, jpg, or png format'));
};

export const upload = multer({ storage, fileFilter });

export const storeFiles = (files: any, product: IProduct) => {
	files.map((file: FileProps, index: number) => {
		// console.log(`Moving file ${file.filename} from ${file.path} to ../uploads/${product._id}/${index}.${file.mimetype.split('/')[1]}`);
		fs.move(file.path, `../server/uploads/${product._id}/${index}.${file.mimetype.split('/')[1]}`);
	});
};

export const removeFiles = (product: IProduct) => {
	fs.rmSync(`../server/uploads/${product._id}/`, { recursive: true, force: true });
};
