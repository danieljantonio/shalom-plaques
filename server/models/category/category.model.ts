import { Schema, model, Document } from 'mongoose';
import ICategory from './category.interface';

const { ObjectId } = Schema.Types;

const categorySchema = new Schema<ICategory & Document>({
	name: { type: String, unique: true },
	subCategories: [{ type: ObjectId, ref: 'SubCategory' }],
});

const Category = model<ICategory & Document>('Category', categorySchema);

export default Category;
