import { Schema, model, Document } from 'mongoose';
import IProduct from './product.interface';

const { ObjectId } = Schema.Types;

const productSchema = new Schema<IProduct & Document>({
	series: String,
	description: String,
	images: [String],
	category: { type: ObjectId, ref: 'Category' },
	subCategory: { type: ObjectId, ref: 'SubCategory' },
});

const Product = model<IProduct & Document>('Product', productSchema);

export default Product;
