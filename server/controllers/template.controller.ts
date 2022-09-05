import * as express from 'express';
import { returnResponse } from '../helpers/res.helpers';
import Template from '../models/template/template.model';

class TemplateController {
	public path = '/template/';
	public router = express.Router();

	constructor() {
		this.initializeRoutes();
	}

	public initializeRoutes = () => {
		this.router.get(this.path, this.getTemplate);
		this.router.get(this.path, this.getTemplates);
		this.router.post(this.path, this.createTemplate);
	};

	createTemplate = async (req: express.Request, res: express.Response) => {
		try {
			const { name }: { name: string } = req.body;
			const newTemplate = new Template({ name });
			await newTemplate.save();
			returnResponse(200, res, newTemplate);
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to create template', errorLog: error });
		}
	};

	getTemplates = async (_: express.Request, res: express.Response) => {
		try {
			const templates = await Template.find().lean().exec();
			returnResponse(200, res, templates);
		} catch (error) {
			returnResponse(500, res, { error: 'Failed to fetch templates', errorLog: error });
		}
	};

	getTemplate = async (req: express.Request, res: express.Response) => {
		const { id = null } = req.params;
		try {
			const template = await Template.findOne({ _id: id }).populate('subTemplates').lean().exec();
			if (!template) throw Error('Template not found');
			returnResponse(200, res, template);
		} catch (error) {
			returnResponse(500, res, { error: `Failed to fetch template ${id}`, errorLog: error });
		}
	};
}

export default TemplateController;
