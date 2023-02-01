import { RootState } from './../index';
import { SET_MSG, UserMsg } from './../reducers/userMsgReducer';
import { ChatAction } from './../reducers/chatReducer';
import { userService } from './../../services/user.service';
import { setUserMsg } from './userMsgActions';
import { ChatActionTypes, Message } from '@/types';
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
		if (!txt) return;
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

export const setChat = (chatId: string): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			const chat = await chatService.getChatById(chatId);
			dispatch({ type: ChatActionTypes.SET_CUR_CHAT, payload: chat });
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};

export const addMessage = (
	message: { file: File | Blob | null; timestamp: number } & Message,
	chatId: string
): any => {
	return async (dispatch: Dispatch<ChatAction | userMsgAction>) => {
		try {
			message.timestamp = Date.now();
			const chat = await chatService.addMessage(message, chatId);
			dispatch({ type: ChatActionTypes.ADD_MESSAGE, payload: chat });
		} catch (err) {
			console.error(err);
			dispatch(setUserMsg({ type: 'error', txt: 'Failed to get data' }));
		}
	};
};
