import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { PersonalInfo as mount } from 'auth/Personal-Info';
const AppHeader = lazy(() => import('../../components/AppHeader/AppHeader'));
const Profile = () => {
	const ref = useRef(null);
	useEffect(() => {
		mount?.(ref.current);
	}, []);
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<AppHeader />
			</Suspense>
			<div ref={ref}></div>;
		</>
	);
};

export default Profile;
