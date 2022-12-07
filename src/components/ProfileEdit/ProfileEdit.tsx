import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { PersonalInfoEdit as mount } from 'auth/Personal-Info-Edit';
const AppHeader = lazy(() => import('../AppHeader/AppHeader'));
const ProfileEdit = () => {
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

export default ProfileEdit;
