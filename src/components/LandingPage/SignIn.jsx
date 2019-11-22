import React, { useState } from 'react';
import { TextField, Grid, Paper, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { postData } from '../../utils/api';
export default function SignIn(props) {
	const initialState = {
		email: '',
		password: ''
	};

	const [ Input, setInput ] = useState(initialState);
	const [ SnackbarOpen, setSnackbarOpen ] = useState(true);
	const [ InputError, setInputError ] = useState();
	function handleCloseSnackBar() {
		setSnackbarOpen(false);
		localStorage.removeItem('newlyCreate');
	}

	function formSubmission() {
		postData('/login', { email: Input.email, password: Input.password })
			.then((result) => {
				localStorage.setItem('accessToken', result.data.accessToken);
				props.history.push('/home');
			})
			.catch((error) => {
				console.log(error.response);
				setInputError(true);
			});
	}
	function handleTextFieldChanges(e) {}
	console.log(Input);
	return (
		<React.Fragment>
			{localStorage.getItem('newlyCreate') ? (
				<Snackbar
					open={SnackbarOpen}
					message="Account successfully created"
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					autoHideDuration={2000}
					onClose={handleCloseSnackBar}
				/>
			) : null}
			<Paper className="paper">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						formSubmission();
					}}
				>
					<Grid container>
						<Grid item xs={12} className="grid-padding">
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<img
									src="https://forum.imasters.com.br/uploads/monthly_2017_03/logo.png.83045f3341452136ad36fc9a376670c7.png"
									width={200}
								/>
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
								helperText={InputError ? 'Invalid email!' : ''}
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
								helperText={InputError ? 'Invalid password!' : ''}
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
		</React.Fragment>
	);
}
