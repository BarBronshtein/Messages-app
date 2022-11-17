import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/Login';
function App() {
	return (
		<Router>
			<div className="main-app">
				{/* <Header /> */}
				<main>
					<Routes>
						<Route path="/" element={<LoginForm />} />
						{/* <Route path="/messages" element={<ChatList />} /> */}
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
