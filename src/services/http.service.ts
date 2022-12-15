import Axios from 'axios';
const axios = Axios.create({
	withCredentials: true,
});

export const httpService = {
	get(endpoint: string, data?: unknown) {
		return ajax(endpoint, 'GET', data);
	},
	post(endpoint: string, data?: unknown) {
		return ajax(endpoint, 'POST', data);
	},
	put(endpoint: string, data?: unknown) {
		return ajax(endpoint, 'PUT', data);
	},
	delete(endpoint: string, data?: unknown) {
		return ajax(endpoint, 'DELETE', data);
	},
};

async function ajax(
	endpoint: string,
	method = 'GET',
	data: null | unknown = null
) {
	try {
		const res = await axios({
			url: endpoint,
			method,
			data,
			params: method === 'GET' ? data : null,
		});
		return res.data;
	} catch (err: any) {
		console.log(
			`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`,
			data
		);
		console.dir(err);
		throw err;
	}
}
