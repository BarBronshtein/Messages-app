import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ChatListHeader from './components/ChatList/ChatListHeader';
import LoginForm from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
function App() {
	return (
		<Router>
			<div className="main-app">
				<ChatListHeader />
				<main>
					<Routes>
						<Route path="/" element={<LoginForm />} />
						{/* <Route path="/messages" element={<ChatList />} /> */}
						<Route path="*" element={<NotFound />} />/
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
