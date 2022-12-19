import { Navigate, Outlet } from 'react-router-dom';

export const GuestRoute = () => {
	const user = sessionStorage.getItem('loggedinUser');
	return !user ? <Outlet /> : <Navigate to="/chats" />;
};
