import React, { useState } from 'react';
import { TextField, Grid, Paper, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { postData } from '../../utils/api';
import logo from '../../assets/img/logo.png';

export default function SignIn(props) {
	const initialState = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const [ Input, setInput ] = useState(initialState);
	const [ Loading, setLoading ] = useState(false);
	const [ InvalidPassword, setInvalidPassword ] = useState(true);
	const [ SnackbarState, setSnackbarState ] = useState({ message: '', open: false });
	function addUser() {
		setLoading(true);
		setSnackbarState({ open: true, message: 'Loading' });
		postData('/register', { username: Input.username, email: Input.email, password: Input.password })
			.then((result) => {
				console.log(result);
				setLoading(false);
				localStorage.setItem('newlyCreate', true);
				props.history.push('/');
				setSnackbarState({ open: true, message: 'Account created successfully' });
			})
			.catch((error) => {
				console.log(error.response);
				if (error.response) {
					setSnackbarState({ open: true, message: error.response.data });
				}
				setLoading(false);
			});
	}
	function confirmUserPassword(e) {
		if (e.target.value === Input.password) {
			setInvalidPassword(false);
		}
		else {
			setInvalidPassword(true);
		}
	}
	return (
		<React.Fragment>
			<Snackbar
				open={SnackbarState.open}
				message={SnackbarState.message}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				autoHideDuration={2000}
				onClose={() => {
					setLoading(false);
					setSnackbarState({ ...SnackbarState, open: false });
				}}
			/>

			<div className="animated fadeInRight">
				<Paper className="paper">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							addUser();
						}}
					>
						<Grid container>
							<Grid item xs={12} className="grid-padding">
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<img src={logo} />
								</div>
							</Grid>
							<Grid item xs={12} className="grid-padding">
								<TextField
									label="Username"
									fullWidth
									required
									type="text"
									onChange={(e) => {
										setInput({ ...Input, username: e.target.value });
									}}
								/>
							</Grid>
							<Grid item xs={12} className="grid-padding">
								<TextField
									label="Email"
									fullWidth
									required
									onChange={(e) => {
										setInput({ ...Input, email: e.target.value });
									}}
									type="email"
								/>
							</Grid>
							<Grid item xs={12} className="grid-padding">
								<TextField
									label="Password"
									fullWidth
									type="password"
									required
									onChange={(e) => {
										setInput({ ...Input, password: e.target.value });
									}}
								/>
							</Grid>
							<Grid item xs={12} className="grid-padding">
								<TextField
									label="Confirm Password"
									fullWidth
									type="password"
									required
									onChange={(e) => {
										confirmUserPassword(e);
									}}
								/>
							</Grid>

							<Grid item xs={6} className="grid-padding">
								<Button type="submit" disabled={InvalidPassword}>
									Register
								</Button>
								<Link to="/" className="link">
									<Button type="button">Sign in</Button>
								</Link>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</div>
		</React.Fragment>
	);
}
