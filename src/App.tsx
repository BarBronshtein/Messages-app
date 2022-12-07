import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
const Chat = lazy(() => import('./components/Chat/Chat'));
const ChatList = lazy(() => import('./components/ChatList/ChatList'));
const LoginForm = lazy(() => import('./components/Login/Login'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const ProfileEdit = lazy(() => import('./components/ProfileEdit/ProfileEdit'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
function App() {
	return (
		<Router>
			<div className="main-app">
				<main>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/" element={<LoginForm />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/profile-edit" element={<ProfileEdit />} />
							<Route path="/chats" element={<ChatList />} />
							<Route path="/chats/:id" element={<Chat />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	);
}

export default App;
