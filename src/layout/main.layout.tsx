import React, { ReactNode } from 'react';
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
		</>
	);
};

export default Layout;
