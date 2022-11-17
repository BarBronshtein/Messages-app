import React, { useEffect, useRef } from 'react';
import mount from 'auth/Login';
import './Login.css';
const LoginForm = () => {
	const ref = useRef(null);
	useEffect(() => {
		mount(ref.current);
	}, []);
	return <div ref={ref}></div>;
};

export default LoginForm;
