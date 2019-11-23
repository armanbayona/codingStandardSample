import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../../../layouts';
import { Redirect } from 'react-router-dom';
export default function MainRoute(props) {
	console.log('Main Route', props);

	return (
		<React.Fragment>
			{localStorage.getItem('accessToken') ? (
				<MainPage render={<Route {...props} />} {...props} />
			) : (
				<Redirect push to="/" />
			)}
		</React.Fragment>
	);
}
