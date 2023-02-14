/// <reference types="vite/client" />
declare module 'auth/Login';
declare module 'auth/Store';
declare module 'auth/Modal';
declare module 'auth/App-Header';
declare module 'auth/Personal-Info-Edit';
declare module 'auth/Personal-Info';

interface Window {
	gStore: Store;
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_REMOTE_ASSETS_APP_URL: string;
	readonly VITE_REMOTE_APP_URL: string;
	readonly PROD: boolean;

	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
