import io, { Socket } from 'socket.io-client';
import { userService } from './user.service';

export enum ISocketTypes {
	SET_USER_EMIT_SOCKET = 'SET_USER_SOCKET',
	DISCONNET_USER_EMIT_SOCKET = 'DISCONNET_USER_SOCKET',
	SET_TOPIC = 'SET_TOPIC',
	CLIENT_EMIT_ADD_MESSAGE = 'CLIENT_EMIT_ADD_MESSAGE',
	CLIENT_EMIT_CONVERSATION_UPDATE = 'CLIENT_EMIT_CONVERSATION_UPDATE',
	SERVER_EMIT_ADD_MESSAGE = 'SERVER_EMIT_ADD_MESSAGE',
	SERVER_EMIT_CONVERSATION_UPDATE = 'SERVER_EMIT_CONVERSATION_UPDATE',
}

const baseUrl: string = import.meta.env.PROD
	? import.meta.env.VITE_REMOTE_APP_URL
	: 'https://chattyapp.lol';
export const socketService = createSocketService();

// for debugging from console
// (<any>window).socketService = socketService;

socketService.setup();

function createSocketService() {
	var socket: Socket | null = null;
	const socketService = {
		setup() {
			const user = userService.getLoggedInUser();
			socket = io(baseUrl);
			setTimeout(this.login, 800, user._id);
		},
		on(eventName: string, cb: (...args: any) => void) {
			socket?.on(eventName, cb);
		},
		off(eventName: string, cb: null | ((...args: any) => void) = null) {
			if (!socket) return;
			if (!cb) socket.removeAllListeners(eventName);
			else socket.off(eventName, cb);
		},
		emit(eventName: string, data: any) {
			data = JSON.parse(JSON.stringify(data));
			socket?.emit(eventName, data);
		},
		login(userId: string) {
			socket?.emit(ISocketTypes.SET_USER_EMIT_SOCKET, userId);
		},
		logout() {
			socket?.emit(ISocketTypes.DISCONNET_USER_EMIT_SOCKET);
		},
		terminate() {
			socket = null;
		},
	};
	return socketService;
}
