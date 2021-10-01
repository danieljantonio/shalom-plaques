/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { capitalize, getSubCategories, groupByN, NewItemCardDetail, getItems } from '../../../helpers/helpers';
import ProductCard from '../../common/Product/product-card.common';
import Spinner from '../../common/Spinner/spinner.common';
import SideNav from './components/side-nav.products';
import './products.page.scss';

interface ProductsParams {
	categoryId: string | '';
}

const ProductsPage = () => {
	const productCategories = getSubCategories(); // Product categories and sub categories for sidenav
	const [items, setItems] = useState<any>({}); // this stores all of the items
	const initialNumOfItems = window.screen.width < 767 ? 2 : 4;
	const [numberOfItems, setNumberOfItems] = useState<number>(initialNumOfItems);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [category, setCategory] = useState<string>('Products');
	const [subCategory, setSubCategory] = useState<string>('');
	const [allLoaded, setAllLoaded] = useState<boolean>(false);

	// const getCategory = (categoryId?: string) => {
	// 	if (!categoryId) return 'Products';
	// 	return capitalize(categoryId?.replace('-', ' '));
	// };

	const updateProducts = (category: string, subCategory: string): void => {
		console.log(`updateProducts: ${category} - ${subCategory}`);
		setLoaded(false);
		setCategory(category);
		setSubCategory(subCategory);
		getSubCategories();
		getProducts(category, subCategory);
	};

	const getProducts = (category: string, subCategory?: string) => {
		const items = getItems(category, subCategory);
		setItems(items);
		setNumberOfItems(initialNumOfItems);
		if (Math.floor(items.length / 3) <= initialNumOfItems) setAllLoaded(true);
		setTimeout(() => {
			setLoaded(true);
		}, 400);
	};

	useEffect(() => {
		getProducts(category, subCategory);
		return () => setLoaded(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, allLoaded]);

	const loadMoreItems = (): void => {
		let appendNo = 2;
		if (window.screen.width < 767) appendNo = 1;
		setNumberOfItems(numberOfItems + appendNo);
		if (Math.floor(items.length / 3) <= numberOfItems + appendNo) setAllLoaded(true);
	};

	const renderRows = (products: NewItemCardDetail[], rootIndex: number) => {
		return (
			<div key={rootIndex} className="row product-row">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		);
	};

	return (
		<div className="product-page">
			<h1>
				{category}
				{subCategory.length > 0 ? ` - ${subCategory}` : null}
			</h1>
			<div className="product-container">
				<SideNav productCategories={productCategories} updateProducts={updateProducts} />
				<div className="main container">
					{loaded ? (
						<>
							{groupByN(3, items)
								.slice(0, numberOfItems)
								.map((productRow, index) => renderRows(productRow, index))}
							{!allLoaded ? (
								<button id="load-more" className="card" onClick={loadMoreItems}>
									Load More
								</button>
							) : null}
						</>
					) : (
						<div className="spinner-container">
							<Spinner />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
