import { httpService } from './http.service';
import { User } from '@/types';
import axios from 'axios';

export const userService = {
	getUsers,
	getLoggedInUser,
	getUserById,
};

const BASE_URL = import.meta.env.VITE_REMOTE_APP_URL;

async function getUsers(filterByName = '', signal: AbortSignal) {
	const res = await axios.get(BASE_URL + '/api/user', { signal });
	const users = res.data;
	if (filterByName) {
		const regex = new RegExp(filterByName, 'i');
		return users.filter(
			(user: User) =>
				user.fullname.match(regex) && user._id !== getLoggedInUser()._id
		);
	}
	return users.filter((user: User) => user._id !== getLoggedInUser()._id);
}

async function getUserById(userId: string) {
	return httpService.get(`${BASE_URL}/api/user/${userId}`);
}

function getLoggedInUser() {
	return JSON.parse(sessionStorage.getItem('loggedinUser') as string);
}
