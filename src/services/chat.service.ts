import { ChatOption } from './../types/ChatOptions';
import { socketService, ISocketTypes } from '@/services/socket.service';
import { utilService } from '@/services/util.service';
import { userService } from './user.service';
import { httpService } from './http.service';
import { Chat, Message, User } from '@/types';
import axios from 'axios';
export const chatService = {
	getChats,
	getChatById,
	createChat,
	updateChat,
	getEmpyMessage,
	addMessage,
};

const BASE_URL = import.meta.env.VITE_REMOTE_APP_URL || 'https://chattyapp.lol';

async function getChats() {
	try {
		const res = await httpService.get(`${BASE_URL}/api/chat`);
		return res;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get chats try again later');
	}
}

async function getChatById(chatId: string, signal: AbortSignal) {
	try {
		const res = await httpService.get(
			`${BASE_URL}/api/chat/${chatId}`,
			{},
			signal
		);
		return res;
	} catch (err) {
		console.log(err);
		if ((err as any).code === 'ERR_CANCELED') return;
		throw new Error(`Failed to get chat ${chatId} try again later`);
	}
}

async function addMessage(
	message: { file?: File | Blob | null; timestamp: number } & Message,
	chatId: string,
	conversation: ChatOption
) {
	try {
		if (message.file) {
			const formData = new FormData();
			formData.append(
				'file',
				message.file,
				`${message.file.name}/${message.file.type}`
			);
			const { data } = await axios.post(`${BASE_URL}/api/file/upload`, formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			message.url = data;
			delete message.file;
		}

		socketService.emit(ISocketTypes.CLIENT_EMIT_ADD_MESSAGE, {
			...message,
			chatId,
		});

		socketService.emit(ISocketTypes.CLIENT_EMIT_CONVERSATION_UPDATE, {
			lastMsg: { txt: message.txt, timestamp: message.timestamp },
			chatId,
			user: [userService.getLoggedInUser(), ...conversation.user],
			_id: conversation._id,
		});

		const res = await httpService.put(
			`${BASE_URL}/api/chat/message/${chatId}`,
			message
		);
		return res;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to add message try again later');
	}
}
function getEmpyMessage(txt = '') {
	return <Message>{
		id: utilService.makeId(),
		fromUser: (userService.getLoggedInUser() as User)._id,
		txt,
	};
}

async function updateChat(chat: Chat) {
	const res = await httpService.put(`${BASE_URL}/api/chat/${chat._id}`, {
		chat,
		user: userService.getLoggedInUser(),
	});
	return res.data;
}

async function createChat(user: User) {
	try {
		const participants = [user, userService.getLoggedInUser() as User];
		const res = await httpService.post(`${BASE_URL}/api/chat`, participants);
		return res;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to create Chat');
	}
}
