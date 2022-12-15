import axios from 'axios';
import type { User } from '@/components/Chat/ChatCmp/ChatHeader';
export const userService = {
	getUsers,
};

const BASE_URL = import.meta.env.VITE_VITE_REMOTE_APP_URL;

async function getUsers(filterByName = null) {
	const res = await axios.get(BASE_URL + 'user');
	const users = res.data;
	if (filterByName) {
		const regex = new RegExp(filterByName);
		return users.filter((user: User) => user.fullname.match(regex));
	}
	return users;
}
