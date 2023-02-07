import { httpService } from './http.service';
import { User } from '@/types';

export const userService = {
	getUsers,
	getLoggedInUser,
	getUserById,
};

const BASE_URL = import.meta.env.VITE_REMOTE_APP_URL;

async function getUsers(filterByName = '', signal: AbortSignal) {
	try {
		const users = await httpService.get(BASE_URL + '/api/user', {}, signal);
		if (filterByName) {
			const regex = new RegExp(filterByName, 'i');
			return users.filter(
				(user: User) =>
					user.fullname.match(regex) && user._id !== getLoggedInUser()._id
			);
		}
		return users.filter((user: User) => user._id !== getLoggedInUser()._id);
	} catch (err: any) {
		console.log(err);
		if (err.code === 'ERR_CANCELED') return;
		throw new Error('Failed to get users');
	}
}

async function getUserById(userId: string) {
	return httpService.get(`${BASE_URL}/api/user/${userId}`);
}

function getLoggedInUser() {
	return JSON.parse(sessionStorage.getItem('loggedinUser') as string);
}
