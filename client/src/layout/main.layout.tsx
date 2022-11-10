import React, { ReactNode } from 'react';
import Footer from '../components/footer.components';
import Navbar from '../components/navbar.components';
import SocialLinkIcons from '../components/socials.components';
// import Navbar from '../components/Navbar';

type Props = {
	children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
			<SocialLinkIcons />
		</>
	);
};

export default Layout;
