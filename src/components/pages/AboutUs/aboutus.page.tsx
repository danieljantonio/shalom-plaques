import React from 'react';
import { baseUrl } from '../../../helpers/helpers';
import ColumnHalf from '../../common/Column/half.column';
import './aboutus.page.scss';

const AboutUsPage: React.FC = () => {
	return (
		<div className="about-us">
			<div className="container center-xy about-1">
				<h1>About Us</h1>
				<p style={{ width: '90%' }}>
					For over 30 years, Shalom Handicrafts have produced high quality products made from locally selected woods. Exporting Indonesian
					woodwork to over 23 countries all around the world and providing training and jobs to less fortunate individuals.
				</p>
			</div>

			<div className="row container">
				<ColumnHalf className="center-xy">
					<div className="tag-header pad-y50-smo">
						{/* <h2 className="">Shalom Plaques</h2> */}
						<p>
							Enabling people of lower-class to provide for their families through permanent employment. Many of which have been with us
							for over 25 years.
						</p>
					</div>
				</ColumnHalf>

				<ColumnHalf className="center-y hide-sm pv-lg-10p">
					<img src={`${baseUrl}/production/working-4.JPG`} alt="img" className="card mag-y50" />
				</ColumnHalf>
			</div>
			<div className="row container">
				<ColumnHalf className="center-y hide-sm pv-lg-10p">
					<div className="img-container card mag-y50">
						<img src={`${baseUrl}/production/cnc-machine.JPG`} alt="img" className="" />
						<div className="darken"></div>
					</div>
				</ColumnHalf>
				<ColumnHalf className="center-xy">
					<div className="tag-header pad-y50-smo">
						{/* <h2 className="">High quality wood</h2> */}
						<p>Training them to be proficient in operating the machines and techologies of the company.</p>
					</div>
				</ColumnHalf>
			</div>
		</div>
	);
};

export default AboutUsPage;
