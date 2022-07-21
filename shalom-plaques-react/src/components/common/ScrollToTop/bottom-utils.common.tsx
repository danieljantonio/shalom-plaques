import React from 'react';
import { baseUrl, socialLinks } from '../../../helpers/helpers';
import './bottom-utils.common.scss';

const ScrollToTop: React.FC = () => {
	return (
		<div className="bottom-utils">
			<div className="util-icon" onClick={() => window.open(socialLinks.tokopedia, "_blank")}>
				<img className="large-util" src={`${baseUrl}/icons/tokopedia-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.open(socialLinks.whatsapp, "_blank")}>
				<img className="medium-util" src={`${baseUrl}/icons/whatsapp-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.open(socialLinks.instagram, "_blank")}>
				<img className="medium-util" src={`${baseUrl}/icons/instagram-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.location.href = socialLinks.email}>
				<img className="medium-util" src={`${baseUrl}/icons/email-icon.svg`} alt="scroll to top" />
			</div>
			<div className="util-icon" onClick={() => window.scrollTo(0, 0)}>
				<img src={`${baseUrl}/icons/arrow-up.svg`} alt="scroll to top" />
			</div>
		</div>
	);
};

export default ScrollToTop;
