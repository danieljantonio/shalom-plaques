import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from './layouts/main.layout';
import AuthAuthentication from './pages/authentication/auth.authentication';
import CategoryContent from './pages/content/categories/category.content';
import Home from './pages/content/home/home.home';
import ProductsContent from './pages/content/products/products.content';
import SubCategoryContent from './pages/content/subcategory/subcategory.content';

interface IRoute {
	component: React.ReactElement | null;
	path: string;
	requireAuth: boolean;
	selectedKey?: string;
	title?: string;
}

const publicRoutes: IRoute[] = [{ component: <AuthAuthentication />, path: '/', requireAuth: false }];

const privateRoutes: IRoute[] = [
	{ component: <Home />, path: '/', requireAuth: true, title: 'Home' },
	{ component: <CategoryContent />, path: '/categories', requireAuth: true, selectedKey: '1', title: 'Categories' },
	{ component: <SubCategoryContent />, path: '/sub-categories', requireAuth: true, selectedKey: '2', title: 'SubCategories' },
	{ component: <ProductsContent />, path: '/products', requireAuth: true, selectedKey: '3', title: 'Products' },
];

const renderComponent = (Component: any, requireAuth: boolean = false, selectedKey: string = '0', title: string = '') => {
	if (!requireAuth) return Component;
	return (
		<MainLayout selectedKey={selectedKey} title={title}>
			{Component}
		</MainLayout>
	);
};

export const renderRoutes = (isAuthenticated: boolean) => {
	if (!isAuthenticated) return publicRoutes.map(({ path, component }, index) => <Route path={path} key={index} element={renderComponent(component)} />);
	return privateRoutes.map(({ path, component, requireAuth, selectedKey, title }, index) => <Route path={path} key={index} element={renderComponent(component, requireAuth, selectedKey, title)} />);
};
