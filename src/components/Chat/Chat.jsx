import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import ChatList from './ChatList';
import ReplyForm from './ReplyForm';
export default function Chat() {
	return (
		<React.Fragment>
			<Paper square={true} className="animated bounceInRight chat-wrapper">
				<div className="content-title-container">
					<span className="chat-title">Online : 20</span>
				</div>
				<Divider />
				<ChatList />
			</Paper>
			<ReplyForm />
		</React.Fragment>
	);
}
