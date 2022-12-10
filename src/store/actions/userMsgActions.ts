import { Dispatch } from 'redux';
import { SET_MSG } from '../reducers/userMsgReducer';
export function setUserMsg(msg: object) {
	return { type: SET_MSG, msg };
}

export function clearMsg() {
	return { type: SET_MSG, msg: null };
}
