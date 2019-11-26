import React, { useEffect, useState } from 'react';
import { Typography, Paper, Divider } from '@material-ui/core';
import { getData } from '../../utils/api';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

export default function Users() {
	const [ Data, setData ] = useState([]);
	useEffect(() => {
		getData('/users')
			.then((result) => {
				setData(result.data);
			})
			.catch((error) => {
				alert(error.response.data);
			});
	}, []);

	console.log(Data);
	return (
		<Paper className="content-wrapper animated bounceInRight">
			<div className="content-title-container">
				<span className="content-title">Users</span>
			</div>

			<div style={{ border: 'solid 1px #eee', marginTop: 15, minHeight: 740, background: 'whitesmoke' }}>
				<Table aria-label="simple table">
					<TableHead style={{ background: '#F4F4F4' }}>
						<TableRow>
							<TableCell>ID number</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Username</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Data.map((item) => (
							<TableRow key={item.id}>
								<TableCell component="td" scope="row">
									{item.id}
								</TableCell>
								<TableCell component="td" scope="row">
									{item.email}
								</TableCell>
								<TableCell component="td" scope="row">
									{item.username}
								</TableCell>
								<TableCell component="td" scope="row">
									--
								</TableCell>
								<TableCell component="td" scope="row">
									--
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}
