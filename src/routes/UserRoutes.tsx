import { userService } from '@/services/user.service';
import { Navigate, Outlet } from 'react-router-dom';

export const UserRoutes = () => {
	const user = userService.getLoggedInUser();
	return user ? <Outlet /> : <Navigate to="/" />;
};
