import { Schema, model, Document } from 'mongoose';
import Template from './template.interface';

const templateSchema = new Schema<Template & Document>({
	name: { type: String, unique: true },
});

const Template = model<Template & Document>('Template', templateSchema);

export default Template;
