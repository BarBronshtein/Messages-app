import { User } from '@/types';
import axios from 'axios';

export const userService = {
	getUsers,
	getLoggedInUser,
};

const BASE_URL = import.meta.env.VITE_REMOTE_APP_URL;

async function getUsers(filterByName = '', signal: AbortSignal) {
	const res = await axios.get(BASE_URL + '/user', { signal });
	const users = res.data;
	if (filterByName) {
		const regex = new RegExp(filterByName, 'i');
		return users.filter((user: User) => user.fullname.match(regex));
	}
	return users;
}

function getLoggedInUser() {
	return JSON.parse(sessionStorage.getItem('loggedinUser') as string);
}
