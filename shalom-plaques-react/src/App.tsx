import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from './routes';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					{renderRoutes().map((route) => {
						return route;
					})}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
