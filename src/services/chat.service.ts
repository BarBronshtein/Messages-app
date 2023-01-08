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

const BASE_URL = import.meta.env.VITE_APP_URL || 'http://localhost:7050';

async function getChats() {
	try {
		const res = await httpService.get(
			`${BASE_URL}/api/chats`,
			userService.getLoggedInUser()
		);
		return res.data;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to get chats try again later');
	}
}

async function getChatById(chatId: string) {
	try {
		const res = await httpService.get(`${BASE_URL}/api/chats/${chatId}`);
		return res.data;
	} catch (err) {
		console.log(err);
		throw new Error(`Failed to get chat ${chatId} try again later`);
	}
}

async function addMessage(
	message: { file?: File | Blob | null; timestamp: number } & Message,
	chatId: string
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
			console.log('data', data);
			message.url = data;
			delete message.file;
		}
		console.log('message', message);
		// const res = await httpService.put(
		// `${BASE_URL}/api/chats/message/${chatId}`,
		// message
		// );
		// return res.data;
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
	const res = await httpService.put(`${BASE_URL}/api/chats/${chat._id}`, {
		chat,
		user: userService.getLoggedInUser(),
	});
	return res.data;
}

async function createChat(user: User) {
	try {
		const participants = [user, userService.getLoggedInUser() as User];
		const res = await httpService.post(`${BASE_URL}/api/chats`, participants);
		return res.data;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to create Chat');
	}
}
