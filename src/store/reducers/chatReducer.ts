import { Action } from 'redux';
import { Reducer } from 'react';
import { ChatActionTypes, ChatState } from '@/types';

const INITIAL_STATE: ChatState = {
	curChat: null,
	contacts: null,
	chats: null,
};

export interface ChatAction extends Action<ChatActionTypes> {
	payload: any;
}
export const chatReducer: Reducer<ChatState, ChatAction> = (
	state = INITIAL_STATE,
	action: ChatAction
) => {
	switch (action.type) {
		case ChatActionTypes.SET_CHATS:
			return {
				...state,
				curChat: action.payload,
			};
		case ChatActionTypes.SET_CONTACTS:
			return {
				...state,
				chats: action.payload,
			};
		case ChatActionTypes.SET_CUR_CHAT:
			return {
				...state,
				curChat: action.payload,
			};
		case ChatActionTypes.ADD_MESSAGE:
			return {
				...state,
				chat: action.payload,
			};
		default:
			return state;
	}
};
