import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.common.scss';

const NavigationComponents = () => (
	<div className="navigation">
		<ul>
			<li>
				<NavLink exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/products">
					Products
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/about">
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/contact">
					Contact
				</NavLink>
			</li>
			<li>
				<button onClick={() => window.open('/shalom-handicraft-catalogue.pdf')}>Download Catalogue &gt;</button>
			</li>
		</ul>
	</div>
);

const Header: React.FC = () => {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar-brand">
				ShalomHandicrafts
			</Link>
			<NavigationComponents />
		</nav>
	);
};

export default Header;
