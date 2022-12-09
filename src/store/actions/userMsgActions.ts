import { Dispatch } from 'redux';
import { SET_MSG } from '../reducers/userMsgReducer';
export function setUserMsg(msg: object) {
	return (dispatch: Dispatch) => {
		dispatch({ type: SET_MSG, msg });
	};
}

export function clearMsg() {
	return (dispatch: Dispatch) => {
		dispatch({ type: SET_MSG, msg: null });
	};
}
