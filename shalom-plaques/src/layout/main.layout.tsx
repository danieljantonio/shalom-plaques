import React, { ReactNode } from 'react';
// import Navbar from '../components/Navbar';

type Props = {
	title: string;
	children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return <>{children}</>;
};

export default Layout;
