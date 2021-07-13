import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.common.scss';

const Header: React.FC = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/" className="navbar-brand">
					ShalomPlaques
				</Link>
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
							<button>Download Catalogue &gt;</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
