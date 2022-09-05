import { Schema, model, Document } from 'mongoose';
import ISubCategory from './subcategory.interface';

const { ObjectId } = Schema.Types;

const subCategorySchema = new Schema<ISubCategory & Document>({
	name: String,
	products: [{ type: ObjectId, ref: 'Product' }],
});

const SubCategory = model<ISubCategory & Document>('SubCategory', subCategorySchema);

export default SubCategory;
