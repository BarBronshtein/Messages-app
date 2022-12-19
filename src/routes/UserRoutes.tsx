import { Navigate, Outlet } from 'react-router-dom';

export const UserRoutes = () => {
	const user = sessionStorage.getItem('loggedinUser');
	return user ? <Outlet /> : <Navigate to="/" />;
};
