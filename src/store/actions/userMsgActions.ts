import { SET_MSG, UserMsg } from '../reducers/userMsgReducer';
export function setUserMsg(msg: UserMsg) {
	return { type: SET_MSG, msg };
}

export function clearMsg() {
	return { type: SET_MSG, msg: null };
}
