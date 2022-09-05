import * as express from 'express';
import { createReadStream, existsSync } from 'fs';
import { resolve } from 'path';

import { returnResponse } from '../helpers/res.helpers';

class ImageController {
	public path = '/uploads';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.get(`${this.path}/:productId/:image`, this.streamImage);
	};

	streamImage = async (req: express.Request, res: express.Response) => {
		const { productId, image } = req.params;
		try {
			const imageDir = resolve(__dirname, `../uploads/${productId}/${image}`);
			if (!existsSync(imageDir)) throw Error('image does not exist');
			createReadStream(imageDir).pipe(res);
		} catch (error) {
			returnResponse(500, res, { error: 'Image not found' /* , errorLog: error */ });
		}
	};
}

export default ImageController;
