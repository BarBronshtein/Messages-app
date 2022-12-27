import { utilService } from '@/services/util.service';
import { userService } from './user.service';
import { httpService } from './http.service';
import { Chat, Message, User } from '@/types';

export const chatService = {
	getChats,
	getChatById,
	createChat,
	updateChat,
	getEmpyMessage,
	addMessage,
};

const BASE_URL = import.meta.env.VITE_APP_URL;

async function getChats() {
	const res = await httpService.get(
		`${BASE_URL}/api/chats`,
		userService.getLoggedInUser()
	);
	return res.data;
}

async function getChatById(chatId: string) {
	const res = await httpService.get(`${BASE_URL}/api/chats/${chatId}`);
	return res.data;
}

async function addMessage(
	message: { file?: File | Blob; timestamp: number } & Message,
	chatId: string
) {
	const res = await httpService.put(
		`${BASE_URL}/api/chats/message/${chatId}`,
		message
	);
	return res.data;
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
	const participants = [user, userService.getLoggedInUser() as User];
	const res = await httpService.post(`${BASE_URL}/api/chats`, participants);
	return res.data;
}
