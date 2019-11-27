import React, { useEffect, useState, useRef } from 'react';
import { Paper, Divider } from '@material-ui/core';
import ChatList from './ChatList';
import ReplyForm from './ReplyForm';
import { getData } from '../../utils/api';
export default function Chat() {
	const [ chatData, setChatData ] = useState([]);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		getData('/chats').then((result) => {
			setChatData(result.data);
		});
	});

	function scrollToBottom() {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<React.Fragment>
			<Paper square={true} className="animated bounceInRight chat-wrapper">
				<div className="content-title-container">
					<span className="chat-title">Online : 20</span>
				</div>
				<Divider />
				<ChatList data={chatData} messagesEndRef={messagesEndRef} scrollToBottom={scrollToBottom} />
			</Paper>
			<ReplyForm scrollToBottom={scrollToBottom} />
		</React.Fragment>
	);
}
