import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './router';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
	const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
	return (
		<div className='App'>
			<Router basename='/'> {/* set basename='/admin' for production builds*/}
				<Routes>
					{renderRoutes(isAuthenticated).map((route) => {
						return route;
					})}
				</Routes>
			</Router>
		</div>
	);
};

export default App;
