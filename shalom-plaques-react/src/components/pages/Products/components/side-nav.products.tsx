import React, { useEffect, useState } from 'react';
import './side-nav.products.scss';

interface Props {
	productCategories: any;
	updateProducts: any;
}

const SideNav: React.FC<Props> = ({ productCategories: categories, updateProducts }) => {
	const productCategories = Object.keys(categories);
	const [isExpand, setExpand] = useState<boolean[]>(productCategories.map((category: any) => false));
	const [update, setUpdated] = useState<boolean>(false);

	useEffect(() => {}, [update]);

	const updateStatus = (index: number): void => {
		let expand = isExpand;
		expand[index] = !isExpand[index];
		expand = expand.map((_, i) => {
			if (i !== index) return false;
			else return expand[index];
		});
		setExpand(expand);
		setUpdated(!update);
	};

	const getSubCategory = (index: number): any => Object.values(categories)[index];

	// const changeDisplay = (category: string, subCategory: string): void => {
	// 	console.log(`${category} - ${subCategory}`)
	// }

	return (
		<div className="sidenav">
			<div className="card">
				{productCategories.map((category: string, index: number) => (
					<div className="sidenav-item">
						<div className="header" onClick={() => updateStatus(index)}>
							<p>{category}</p>
							<img src={`/icons/icon_${isExpand[index] ? 'minus' : 'plus'}.svg`} alt="expand" />
						</div>
						<div className={`content${isExpand[index] ? '' : ' hide'}`}>
							{getSubCategory(index).map((subCategory: string) => (
								<p className="content-link" onClick={() => updateProducts(category, subCategory)}>
									{subCategory}
								</p>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SideNav;
