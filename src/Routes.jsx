import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { SignIn, Register } from './components/LandingPage';
import { LandingRoute, MainRoute } from './components/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import Chat from './components/Chat/Chat';
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<LandingRoute
					exact
					path="/"
					component={(props) => {
						return <SignIn {...props} />;
					}}
				/>
				<LandingRoute
					exact
					path="/register"
					component={(props) => {
						return <Register {...props} />;
					}}
				/>
				<MainRoute
					exact
					path="/dashboard"
					component={(props) => {
						return <Dashboard {...props} />;
					}}
				/>
				<MainRoute
					exact
					path="/chat"
					component={(props) => {
						return <Chat {...props} />;
					}}
				/>

				<MainRoute
					exact
					path="/users"
					component={(props) => {
						return <Users {...props} />;
					}}
				/>
			</Switch>
		</BrowserRouter>
	);
}
