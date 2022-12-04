import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import ChatList from './components/ChatList/ChatList';
import LoginForm from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
function App() {
	return (
		<Router>
			<div className="main-app">
				<main>
					<Routes>
						<Route path="/" element={<LoginForm />} />
						<Route path="/chats" element={<ChatList />} />
						{/* <Route path="/chats/:id" element={<Chat />} /> */}
						<Route path="*" element={<NotFound />} />/
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
