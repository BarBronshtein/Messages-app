import { Message } from './Message';
import { Chat } from './Chat';
import { ChatOption } from './ChatOptions';
import { User } from './User';
export type { User, Chat, ChatOption, Message };

export enum ChatActionTypes {
	SET_CONTACTS = 'SET_CONTACTS',
	SET_CHATS = 'SET_CHATS',
	SET_CUR_CHAT = 'SET_CUR_CHAT',
	ADD_MESSAGE = 'ADD_MESSAGE',
}
export interface ChatState {
	curChat: Chat | null;
	contacts: User[] | null;
	chats: ChatOption[] | null;
}
