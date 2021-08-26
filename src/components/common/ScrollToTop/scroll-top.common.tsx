import React from 'react';
import { baseUrl } from '../../../helpers/helpers';
import './scroll-top.common.scss';

const ScrollToTop: React.FC = () => {
	return (
		<div className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
			<img src={`${baseUrl}/icons/arrow-up.svg`} alt="scroll to top" />
		</div>
	);
};

export default ScrollToTop;
