import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Controller } from './types/common';
import { middleware } from './middleware/middleware';

class App {
	public app: express.Application;

	constructor(controllers: Controller[]) {
		this.app = express();

		this.connectToDatabase();
		this.initializeCors();
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	public listen() {
		this.app.listen(process.env.PORT, () => {
			console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
		});
	}

	private initializeMiddlewares() {
		this.app.use(express.json({ limit: '20mb' }));
		this.app.use(express.urlencoded({ limit: '20mb', extended: true }));
		this.app.use(cookieParser());
	}

	private initializeCors() {
		// Add a list of allowed origins.
		// If you have more origins you would like to add, you can add them to the array below.
		const allowedOrigins = ['http://localhost:3000','http://localhost:3001', 'http://localhost:5000', 'http://157.230.38.3'];

		const options: cors.CorsOptions = {
			origin: allowedOrigins,
		};
		this.app.use(cors(options));
	}

	private initializeControllers(controllers: Controller[]) {
		this.app.get('/', middleware, (req: express.Request, res: express.Response) => {
			res.status(200).send('Hello :)');
		});
		controllers.forEach((controller) => {
			this.app.use('/', controller.router);
		});
	}

	private connectToDatabase() {
		mongoose.connect(`${process.env.MONGO_URI}`, (err) => {
			if (err) console.log(err.message);
			else console.log('Database connected');
		});
	}
}

export default App;
