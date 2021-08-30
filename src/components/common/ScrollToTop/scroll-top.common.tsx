import React from 'react';
import { baseUrl } from '../../../helpers/helpers';
import './scroll-top.common.scss';

const ScrollToTop: React.FC = () => {
	return (
		<div className="bottom-utils">
			<div className="util-icon" onClick={() => window.scrollTo(0, 0)}>
				<img className="large-util" src={`${baseUrl}/icons/tokopedia-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.scrollTo(0, 0)}>
				<img className="medium-util" src={`${baseUrl}/icons/whatsapp-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.scrollTo(0, 0)}>
				<img className="medium-util" src={`${baseUrl}/icons/instagram-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.scrollTo(0, 0)}>
				<img className="medium-util" src={`${baseUrl}/icons/email-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.scrollTo(0, 0)}>
				<img src={`${baseUrl}/icons/arrow-up.svg`} alt="scroll to top" />
			</div>
		</div>
	);
};

export default ScrollToTop;
