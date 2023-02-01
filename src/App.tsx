import React, { lazy, Suspense, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { eventBus } from './services/eventBus.service';
import Loader from './components/Loader/Loader';
import UserMsg from './components/UserMsg/UserMsg';
import { UserRoutes } from './routes/UserRoutes';
import { GuestRoute } from './routes/GuestRoute';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Chat = lazy(() => import('./components/Chat/Chat'));
const ChatList = lazy(() => import('./components/Chats/Chats'));
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
		// await axios.post(`${import.meta.env.VITE_AUTH_API_PROD_REMOTE}/auth/logout`);
		await axios.post(
			`https://pear-cautious-basket-clam.cyclic.app/api/auth/logout`
		);
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
				<ErrorBoundary>
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route element={<GuestRoute />}>
								<Route path="/" element={<LoginForm />} />
							</Route>
							<Route element={<UserRoutes />}>
								<Route path="/personal-info" element={<Profile />} />
								<Route path="/personal-info/edit" element={<ProfileEdit />} />
								{!isMobile && (
									<>
										<Route path="/chats" element={<ChatArea />} />
										<Route path="/chats/:id" element={<ChatArea />} />
									</>
								)}
								{isMobile && (
									<>
										<Route path="/chats" element={<ChatList />} />
										<Route path="/chats/:id" element={<Chat />} />
									</>
								)}
							</Route>

							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</main>
			<UserMsg />
		</div>
	);
}

export default App;
