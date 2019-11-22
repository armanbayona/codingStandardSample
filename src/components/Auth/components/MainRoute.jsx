import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../../../layouts';
export default function MainRoute(props) {
	return <MainPage render={<Route {...props} />} />;
}
