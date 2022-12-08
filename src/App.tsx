import React, { lazy, Suspense, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { eventBus } from './services/eventBus.service';
import Loader from './components/Loader/Loader';

const Chat = lazy(() => import('./components/Chat/Chat'));
const ChatList = lazy(() => import('./components/ChatList/ChatList'));
const LoginForm = lazy(() => import('./pages/Login/Login'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const ProfileEdit = lazy(() => import('./pages/ProfileEdit/ProfileEdit'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const ChatArea = lazy(() => import('./pages/ChatArea/ChatArea'));

function App() {
	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;

	const navigate = useNavigate();
	const logout = async (to: string) => {
		await axios.post(`${import.meta.env.VITE_AUTH_API_PROD_REMOTE}auth/logout`);
		sessionStorage.removeItem('loggedinUser');
		navigate(`${to}`);
	};
	useEffect(() => {
		const gotoUnsubscribe = eventBus.on('onGoTo', navigate);
		const logoutUnsubscribe = eventBus.on('onLogout', logout);
		return () => {
			gotoUnsubscribe();
			logoutUnsubscribe();
		};
	}, []);
	return (
		<div className="main-app">
			<main className="min-h-screen">
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<LoginForm />} />
						<Route path="/personal-info" element={<Profile />} />
						<Route path="/personal-info/edit" element={<ProfileEdit />} />
						{!isMobile && <Route path="/chats" element={<ChatArea />}></Route>}
						{isMobile && <Route path="/chats" element={<ChatList />} />}
						{isMobile && <Route path="/chats/:id" element={<Chat />} />}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App;
