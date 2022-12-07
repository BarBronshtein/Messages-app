import React, { useEffect, useRef } from 'react';
import { AppHeader as mount } from 'auth/App-Header';
const AppHeader = () => {
	const ref = useRef(null);
	useEffect(() => {
		mount(ref.current);
	}, []);
	return <div ref={ref}></div>;
};

export default AppHeader;
