import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function ChatList(props) {
	return (
		<List className="chat-list-container">
			{props.data.map((chat) => (
				<ListItem className="chat-list-item" key={chat.id}>
					<ListItemAvatar>
						<Avatar src={chat.image} />
					</ListItemAvatar>
					<ListItemText primary={chat.email} secondary={chat.message} />
				</ListItem>
			))}

			<div ref={props.messagesEndRef} />
		</List>
	);
}
