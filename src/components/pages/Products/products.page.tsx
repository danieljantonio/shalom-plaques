/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { capitalize, getFileStructure, getItems, groupByN, ItemCardDetail } from '../../../helpers/helpers';
import ProductCard from '../../common/Product/product-card.common';
import Spinner from '../../common/Spinner/spinner.common';
import './products.page.scss';

interface ProductsParams {
	categoryId: string | '';
}

const ProductsPage = () => {
	const productCategories = Object.keys(getFileStructure());
	const { categoryId } = useParams<ProductsParams>();
	const [items, setItems] = useState<ItemCardDetail[] | undefined>([]);
	const initialNumOfItems = window.screen.width < 767 ? 2 : 4;
	const [numberOfItems, setNumberOfItems] = useState<number>(initialNumOfItems);
	const [loaded, setLoaded] = useState<boolean>(false);

	const getCategory = (categoryId?: string) => {
		if (!categoryId) return 'Products';
		return capitalize(categoryId?.replace('-', ' '));
	};

	const getProducts = (category: string) => {
		setItems(getItems(category));
		setNumberOfItems(initialNumOfItems);
		setTimeout(() => {
			setLoaded(true);
		}, 500);
	};

	useEffect(() => {
		getProducts(getCategory(categoryId));
		return () => setLoaded(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId]);

	const loadMoreItems = (): void => {
		let appendNo = 2;
		if (window.screen.width < 767) appendNo = 1;
		setNumberOfItems(numberOfItems + appendNo);
	};

	const renderRows = (products: ItemCardDetail[], rootIndex: number) => {
		return (
			<div key={rootIndex} className="row">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		);
	};

	return (
		<div className="product-page">
			<h1>{getCategory(categoryId)}</h1>
			<div className="row container">
				<div className="sidenav">
					<div className="card">
						{productCategories.map((product, index) => (
							<NavLink key={index} exact to={`/products/${product.toLowerCase().replace(' ', '-')}`}>
								{product}
							</NavLink>
						))}
					</div>
				</div>
				<div className="main">
					{loaded ? (
						<>
							{groupByN(3, items)
								.slice(0, numberOfItems)
								.map((productRow, index) => renderRows(productRow, index))}
							<button id="load-more" className="card" onClick={loadMoreItems}>
								Load More
							</button>
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
