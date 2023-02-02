import { Action } from 'redux';
import { Reducer } from 'react';
import { ChatActionTypes, ChatState } from '@/types';

const INITIAL_STATE: ChatState = {
	curContact: null,
	curChat: null,
	contacts: null,
	chats: null,
};

export interface ChatAction extends Action<ChatActionTypes> {
	payload: any;
}
export const chatReducer = (state = INITIAL_STATE, action: ChatAction) => {
	switch (action.type) {
		case ChatActionTypes.SET_CHATS:
			return <ChatState>{
				...state,
				chats: action.payload,
			};
		case ChatActionTypes.SET_CUR_CONTACT:
			return <ChatState>{
				...state,
				curContact: action.payload,
			};
		case ChatActionTypes.SET_CONTACTS:
			return <ChatState>{
				...state,
				contacts: action.payload,
			};
		case ChatActionTypes.SET_CUR_CHAT:
			return <ChatState>{
				...state,
				curChat: action.payload,
			};
		case ChatActionTypes.ADD_MESSAGE:
			return <ChatState>{
				...state,
				curChat: action.payload,
			};
		default:
			return state;
	}
};
