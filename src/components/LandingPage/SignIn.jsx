import React, { useState } from 'react';
import { TextField, Grid, Paper, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function SignIn(props) {
	const initialState = {
		username: '',
		password: ''
	};

	const [ Input, setInput ] = useState(initialState);
	const [ SnackbarOpen, setSnackbarOpen ] = useState(true);
	function handleCloseSnackBar() {
		setSnackbarOpen(false);
		localStorage.removeItem('newlyCreate');
	}

	function formSubmission() {
		alert('Sign in');
	}

	console.log(props);
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
								label="Username"
								fullWidth
								value={Input.username}
								onChange={(e) => {
									setInput({ ...Input, username: e.target.value });
								}}
							/>
						</Grid>
						<Grid item xs={12} className="grid-padding">
							<TextField
								type="password"
								label="Password"
								fullWidth
								value={Input.password}
								onChange={(e) => {
									setInput({ ...Input, password: e.target.value });
								}}
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
