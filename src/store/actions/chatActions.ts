import { RootState } from './../index';
import { SET_MSG, UserMsg } from './../reducers/userMsgReducer';
import { ChatAction } from './../reducers/chatReducer';
import { userService } from './../../services/user.service';
import { setUserMsg } from './userMsgActions';
import { ChatActionTypes, ChatOption, Message, User } from '@/types';
import { Dispatch, Action } from 'redux';
import { chatService } from '@/services/chat.service';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

interface userMsgAction {
	type: typeof SET_MSG;
	msg: UserMsg;
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>;

export const getContacts = (txt: string, signal: AbortSignal): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		if (!txt) return dispatch(clearContacts());
		try {
			const contacts = await userService.getUsers(txt, signal);
			dispatch({ type: ChatActionTypes.SET_CONTACTS, payload: contacts });
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};

export const clearContacts = () => {
	return { type: ChatActionTypes.SET_CONTACTS, payload: null };
};

export const clearChat = () => {
	return { type: ChatActionTypes.SET_CUR_CHAT, payload: null };
};

export const getChatOptions = (): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			const chats = await chatService.getChats();
			dispatch({ type: ChatActionTypes.SET_CHATS, payload: chats });
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};

export const setChat = (chatId: string, signal: AbortSignal): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			const chat = await chatService.getChatById(chatId, signal);
			dispatch({ type: ChatActionTypes.SET_CUR_CHAT, payload: chat });
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};

export const addMessage = (
	message: { file: File | Blob | null; timestamp: number } & Message,
	chatId: string,
	conversation: ChatOption
): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			message.timestamp = Date.now();
			const addedMessage = await chatService.addMessage(
				message,
				chatId,
				conversation
			);
			dispatch({ type: ChatActionTypes.ADD_MESSAGE, payload: addedMessage });
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};

export const addChat = (user: User): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			const chatId = await chatService.createChat(user);
			return chatId;
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};

export const getContactById = (userId: string): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			const contact = await userService.getUserById(userId);
			dispatch({ type: ChatActionTypes.SET_CUR_CONTACT, payload: contact });
		} catch (err) {}
	};
};

export const clearContact = () => {
	return { type: ChatActionTypes.SET_CUR_CONTACT, payload: null };
};

export const addSocketMessage = (payload: Message) => {
	return { type: ChatActionTypes.ADD_MESSAGE, payload };
};

export const saveSocketConversation = (payload: ChatOption) => {
	return { type: ChatActionTypes.SET_CHATS, payload };
};
