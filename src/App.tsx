import React, { lazy, Suspense, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { eventBus } from './services/eventBus.service';
const Chat = lazy(() => import('./components/Chat/Chat'));
const ChatList = lazy(() => import('./components/ChatList/ChatList'));
const LoginForm = lazy(() => import('./pages/Login/Login'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const ProfileEdit = lazy(() => import('./pages/ProfileEdit/ProfileEdit'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
function App() {
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
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<LoginForm />} />
						<Route path="/personal-info" element={<Profile />} />
						<Route path="/personal-info/edit" element={<ProfileEdit />} />
						<Route path="/chats" element={<ChatList />} />
						<Route path="/chats/:id" element={<Chat />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App;
