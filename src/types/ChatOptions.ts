export type ChatOption = {
	user: { fullname: string; imgUrl: string; _id: string }[];
	lastMsg?: { txt: string; timestamp: number };
	chatId: string;
};
