import React, { useState, useEffect } from 'react';
import { TextField, Grid, Paper, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { postData } from '../../utils/api';
import logo from '../../assets/img/logo.png';
export default function SignIn(props) {
	const initialState = {
		email: '',
		password: ''
	};
	useEffect(() => {
		if (localStorage.getItem('newlyCreate')) {
			setSnackBarState({ open: true, message: 'Account successfully create' });
		}
	}, []);
	const [ Input, setInput ] = useState(initialState);
	const [ SnackBarState, setSnackBarState ] = useState({ open: false, message: '' });
	const [ InputError, setInputError ] = useState();
	function handleCloseSnackBar() {
		setSnackBarState({ open: false, message: '' });
		localStorage.removeItem('newlyCreate');
	}
	function formSubmission() {
		postData('/login', { email: Input.email, password: Input.password })
			.then((result) => {
				localStorage.setItem('accessToken', result.data.accessToken);
				localStorage.setItem('email', Input.email);
				props.history.push('/dashboard');
			})
			.catch((error) => {
				console.log(error.response);
				setInputError(true);
				if (error.response) {
					setSnackBarState({ open: true, message: error.response.data });
				}
			});
	}

	return (
		<React.Fragment>
			<Snackbar
				open={SnackBarState.open}
				message={SnackBarState.message}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				autoHideDuration={2000}
				onClose={handleCloseSnackBar}
			/>
			<div className="animated fadeInLeft">
				<Paper className="paper" className={InputError ? 'animated wobble' : null}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							formSubmission();
						}}
					>
						<Grid container>
							<Grid item xs={12} className="grid-padding">
								<div style={{ display: 'flex', justifyContent: 'center', padding: 15 }}>
									<img src={logo} />
								</div>
							</Grid>
							<Grid item xs={12} className="grid-padding">
								<TextField
									label="Email"
									type="email"
									fullWidth
									value={Input.email}
									onChange={(e) => {
										if (e.target.value.length > 0) {
											setInput({ ...Input, email: e.target.value });
										}
										else {
											setInput({ ...Input, email: e.target.value });
											setInputError(false);
										}
									}}
									required
									error={InputError}
									helperText={InputError ? 'Invalid email!' : ' '}
								/>
							</Grid>
							<Grid item xs={12} className="grid-padding">
								<TextField
									type="password"
									label="Password"
									fullWidth
									value={Input.password}
									onChange={(e) => {
										if (e.target.value.length > 0) {
											setInput({ ...Input, password: e.target.value });
										}
										else {
											setInput({ ...Input, password: e.target.value });
											setInputError(false);
										}
									}}
									required
									error={InputError}
									helperText={InputError ? 'Invalid password!' : ' '}
								/>
							</Grid>
							<Grid item xs={6} className="grid-padding">
								<Button type="submit">Login</Button>
								<Link to="/register" className="link">
									<Button type="button">Register</Button>
								</Link>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</div>
		</React.Fragment>
	);
}
