import { CHANGE_THEME } from './../reducers/themeReducer';

export function changeTheme(): {
	type: typeof CHANGE_THEME;
	theme: 'dark' | 'light';
} {
	const theme = sessionStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
	sessionStorage.setItem('theme', theme);
	return { type: CHANGE_THEME, theme };
}
