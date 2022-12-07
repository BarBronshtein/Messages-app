function createEventEmitter(navigation?: boolean) {
	return {
		on(eventName: string, listener: Function) {
			const callListener = ({ detail }: any) => {
				if (navigation) detail = detail === '/' ? detail : '/' + detail;
				listener(detail);
			};
			window.addEventListener(eventName, callListener);
			return () => {
				window.removeEventListener(eventName, callListener);
			};
		},
		emit(eventName: string, data: any) {
			window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
		},
	};
}

export const navigationEventBus = createEventEmitter(true);
export const eventBus = createEventEmitter();
