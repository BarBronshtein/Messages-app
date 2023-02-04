import { User } from './User';

export type ChatOption = {
	user: User[];
	lastMsg?: { txt: string; timestamp: number };
	chatId: string;
};
