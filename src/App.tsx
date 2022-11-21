import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/ChatList/SearchForm';
import LoginForm from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
function App() {
	return (
		<Router>
			<div className="main-app">
				<SearchForm />
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
