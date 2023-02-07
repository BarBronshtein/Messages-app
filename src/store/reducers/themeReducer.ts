export const CHANGE_THEME = 'CHANGE_THEME' as const;

const INITIAL_STATE: { theme: 'dark' | 'light' } = {
	theme: sessionStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};

type Action = {
	type: typeof CHANGE_THEME;
	theme: 'dark' | 'light';
};

export const themeReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				theme: action.theme,
			};
		default:
			return state;
	}
};
