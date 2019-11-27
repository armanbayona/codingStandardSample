import React, { useState } from 'react';
import { TextField, Button, IconButton, Grid } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import { postData } from '../../utils/api';
export default function ReplyForm(props) {
	const initialState = {
		email: localStorage.getItem('email'),
		message: '',
		image: 'https://www.shareicon.net/data/512x512/2015/10/07/113615_face_512x512.png'
	};

	const [ replyState, setReplyState ] = useState(initialState);

	function submitReply(e) {
		e.preventDefault();
		postData('/chats', replyState)
			.then((result) => {
				console.log(result);
				setReplyState({ ...replyState, message: '' });
			})
			.catch((err) => {
				console.log(err.response);
			});

		props.scrollToBottom();
	}

	return (
		<form
			onSubmit={(e) => {
				submitReply(e);
			}}
			className="reply-form-container"
		>
			<input
				type="text"
				className="reply-input"
				autoFocus
				required
				value={replyState.message}
				onChange={(e) => {
					setReplyState({ ...replyState, message: e.target.value });
				}}
			/>
			<IconButton
				style={{
					border: 'solid 1px #eee',
					background: '#f1f1f1'
				}}
				type="submit"
			>
				<TelegramIcon />
			</IconButton>
		</form>
	);
}
