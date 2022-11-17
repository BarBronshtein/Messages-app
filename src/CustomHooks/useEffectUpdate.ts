import { useEffect, useRef } from 'react';

export const useEffectUpdate = (cb: Function, dependencies: any[]) => {
	const isFirstRender = useRef(true);
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		return cb();
	}, dependencies);
};
