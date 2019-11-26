import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function MainNavigation() {
	function removeToken() {
		localStorage.removeItem('accessToken');
	}

	return (
		<React.Fragment>
			<NavLink to="/dashboard">
				<List>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
				</List>
			</NavLink>
			<NavLink to="/users">
				<List>
					<ListItem button>
						<ListItemIcon>
							<GroupOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary="Users" />
					</ListItem>
				</List>
			</NavLink>

			<Divider />
			<List>
				<Link to="" onClick={removeToken}>
					<ListItem>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItem>
				</Link>
			</List>
		</React.Fragment>
	);
}
