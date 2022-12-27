import React, { useEffect, useRef, useState } from 'react';
import { LoginForm as mount } from 'auth/Login';
import './Login.css';
const LoginForm = () => {
	const ref = useRef(null);
	const [bool, useBool] = useState(true);
	useEffect(() => {
		mount(ref.current);
	}, []);
	return <div ref={ref}></div>;
};
export default LoginForm;
