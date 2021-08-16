import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.common.scss';

const NavigationComponents = () => (
	<div className="navigation hide-sm">
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

const BurgerIcon = () => (
	<div className="burger-container hide-lg">
		<div>
			<div className="burger-icon"></div>
			<div className="burger-icon"></div>
			<div className="burger-icon"></div>
		</div>
	</div>
);

const Header: React.FC = () => {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar-brand">
				ShalomHandicrafts
			</Link>
			<BurgerIcon />
			<NavigationComponents />
		</nav>
	);
};

export default Header;
