import { utilService } from '@/services/util.service';
import { userService } from './user.service';
import { Message } from '@/components/Chat/Msg/MsgPreview';
import { httpService } from './http.service';
import { User } from '@/components/Chat/ChatCmp/ChatHeader';
export type Chat = {
	_id: string;
	messages: Message[];
};
export const chatService = {
	getChats,
	getChatById,
	saveChat,
	getEmpyMessage,
	addMessage,
};

const BASE_URL = import.meta.env.VITE_APP_URL;

async function getChats() {
	const res = await httpService.get(`${BASE_URL}/api/chats`);
	return res.data;
}

async function getChatById(chatId: string) {
	const res = await httpService.get(`${BASE_URL}/api/chats/${chatId}`);
	return res.data;
}

async function saveChat(data: Chat | string) {
	if (typeof data === 'string') return await _createChat(data);
	return await _updateChat(data);
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

async function _updateChat(chat: Chat) {
	const res = await httpService.put(`${BASE_URL}/api/chats/${chat._id}`, chat);
	return res.data;
}

async function _createChat(userId: string) {
	const participants = [userId, (userService.getLoggedInUser() as User)._id];
	const res = await httpService.post(`${BASE_URL}/api/chats`, participants);
	return res.data;
}
