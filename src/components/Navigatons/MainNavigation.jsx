import React from 'react';

import { Link } from 'react-router-dom';
export default function MainNavigation() {
	function removeToken() {
		localStorage.removeItem('accessToken');
	}

	return (
		<ul>
			<Link to="/home">
				<li>Dashboard</li>
			</Link>
			<Link to="/" onClick={removeToken}>
				<li>logout</li>
			</Link>
		</ul>
	);
}
