export type Message = {
	id: string;
	fromUser: string;
	type?: 'video' | 'img' | 'audio';
	url?: string;
	txt: string;
};
