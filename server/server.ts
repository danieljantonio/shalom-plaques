import 'dotenv/config';
import App from './app';
import AuthController from './controllers/auth.controller';
import CategoryController from './controllers/category.controller';
import ImageController from './controllers/image.controller';
import ProductController from './controllers/product.controller';
import SubCategoryController from './controllers/subcategory.controller';
import validateEnv from './helpers/validate-env.helpers';

validateEnv();

const app = new App([new AuthController(), new CategoryController(), new SubCategoryController(), new ProductController(), new ImageController()]);

app.listen();

export default app;
