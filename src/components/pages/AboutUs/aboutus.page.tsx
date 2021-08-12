import React from 'react';
import { baseUrl } from '../../../helpers/helpers';
import ColumnHalf from '../../common/Column/half.column';
import './aboutus.page.scss';

const AboutUsPage: React.FC = () => {
	return (
		<div className="about-us">
			<div className="container center-xy about-1">
				<h1>Products</h1>
				<p>
					Founded by Bob Ross in 1978, Shalom Plaques and Handicrafts has been a favored crafter for a variety of woodcrafts. The company is
					now managed by Kennise Y. S. and has continued to flourish over the years.
				</p>
			</div>

			<div className="row container">
				<ColumnHalf className="center-xy">
					<div className="tag-header pad-y50-smo">
						<h1 className="">Shalom Plaques</h1>
						<p>Founded in 1978</p>
					</div>
				</ColumnHalf>

				<ColumnHalf className="center-y hide-sm pv-lg-10p">
					<img src={`${baseUrl}/sample-images/woodwork-test-3.jpeg`} alt="img" className="card mag-y50" />
				</ColumnHalf>
			</div>
			<div className="row container">
				<ColumnHalf className="center-y hide-sm pv-lg-10p">
					<img src={`${baseUrl}/sample-images/woodwork-test-1.jpeg`} alt="img" className="card mag-y50" />
				</ColumnHalf>
				<ColumnHalf className="center-xy">
					<div className="tag-header pad-y50-smo">
						<h1 className="">High quality wood</h1>
						<p>Bringing Word to the ends of the world</p>
					</div>
				</ColumnHalf>
			</div>
		</div>
	);
};

export default AboutUsPage;
