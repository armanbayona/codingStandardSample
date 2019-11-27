import React from 'react';
import { TextField, Button, IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
export default function ReplyForm() {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log('Reply');
			}}
			className="reply-form-container"
		>
			<input type="text" className="reply-input" autoFocus />
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
