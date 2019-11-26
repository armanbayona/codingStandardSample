import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import toolbarLogo from '../assets/img/logo.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MainNavigation } from '../components/Navigatons';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export default function MainPage(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	function removeToken() {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('email');
	}
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={`${clsx(classes.appBar, {
					[classes.appBarShift]: open
				})} animated bounceInLeft`}
				color="default"
				style={{ backgroundColor: '#F1F1F1' }}
			>
				<Toolbar>
					<IconButton
						style={{ color: '#333' }}
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open
						})}
					>
						<MenuIcon />
					</IconButton>
					<div>
						<img
							className={clsx(classes.menuButton, {
								[classes.hide]: open
							})}
							src={toolbarLogo}
							width={115}
							style={{ marginLeft: -15 }}
						/>
					</div>
					<div className="appbar-email-container">
						<span className="appbar-email"> Hi Hoooman!</span>
						&emsp;
						<IconButton style={{ padding: 0 }}>
							<KeyboardArrowDownIcon className="appbar-dropdown-btn" />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open
					})
				}}
				open={open}
			>
				<div className={classes.toolbar}>
					<div className="appbar-logo-holder">
						<img src={toolbarLogo} width={115} />
					</div>

					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<div className="animated bounceInDown">
					<MainNavigation />
				</div>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{props.render}
			</main>
		</div>
	);
}
