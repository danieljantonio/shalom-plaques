import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../../../helpers/helpers';
import ColumnHalf from '../../../../common/Column/half.column';
import './tagline.section.scss';

const TagLineSection: React.FC = () => {
	return (
		<div className="tagline row pad-y50-smo">
			<ColumnHalf className="center-xy">
				<div className="tag-header pad-y50-smo">
					<h2>Est. 1989</h2>
					<h1>Shalom Plaques</h1>
					<p>Bringing the Word to the ends of the world</p>
					<Link to="/products" className="view-products">
						View Products
					</Link>
				</div>
			</ColumnHalf>
			<ColumnHalf className="center-xy hide-sm">
				<img src={`${baseUrl}/product-banner/product-banner-1.png`} alt="img" className="mag-y50" />
				{/* <img src={`${baseUrl}/product-banner/product-banner-1.png`} alt="img" className="" /> */}
				{/* <img src={`${baseUrl}/product-banner/product-banner-2.png`} alt="img" className="" /> */}
			</ColumnHalf>
		</div>
	);
};

export default TagLineSection;
