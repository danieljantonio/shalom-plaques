import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './router';
import { useSelector } from 'react-redux';

const App = () => {
	const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
	return (
		<div className='App'>
			<Router>
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
