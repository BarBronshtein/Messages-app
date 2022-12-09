export const SET_MSG = 'SET_MSG' as const;
const INITIAL_STATE = {
	msg: {},
};
type Action = {
	type: typeof SET_MSG;
	msg: object | null;
};
export function userMsgReducer(state = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case SET_MSG:
			return {
				...state,
				msg: action.msg,
			};
		default:
			return state;
	}
}
