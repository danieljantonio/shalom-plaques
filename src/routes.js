import { Route } from 'react-router-dom';
import Footer from './components/common/Footer/footer.common';
import Header from './components/common/Header/header.common';
import AboutUsPage from './components/pages/AboutUs/aboutus.page';
import ContactUsPage from './components/pages/ContactUs/contactus.page';
import HomePage from './components/pages/Home/home.page';
import ProductsPage from './components/pages/Products/products.page';

const publicRoutes = [
	{ component: HomePage, path: '/', exact: true },
	{ component: ProductsPage, path: '/products', exact: true },
	{ component: AboutUsPage, path: '/about', exact: true },
	{ component: ContactUsPage, path: '/contact', exact: true },
];

const renderComponent = (Component) => {
	return (
		<div>
			<Header />
			<Component />
			<Footer />
		</div>
	);
};

export const renderRoutes = () => {
	return publicRoutes.map(({ path, component, exact }, index) => {
		return <Route path={path} key={index} exact={exact} component={() => renderComponent(component)} />;
	});
};
