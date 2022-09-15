import React, { ReactNode } from 'react';
import Footer from '../components/footer.components';
import Navbar from '../components/navbar.components';
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
		</>
	);
};

export default Layout;
