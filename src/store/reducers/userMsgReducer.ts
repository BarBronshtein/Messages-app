export const SET_MSG = 'SET_MSG' as const;
type UserMsg = {
	type: 'error' | 'sucess';
	txt: string;
};
const INITIAL_STATE: { msg: UserMsg | null } = {
	msg: null,
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
