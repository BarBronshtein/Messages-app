function createEventEmitter() {
	return {
		on(eventName: string, listener: (...args: any[]) => () => void) {
			const callListener = ({ detail }: any) => {
				listener(detail);
			};
			window.addEventListener(eventName, callListener);
			return () => {
				window.removeEventListener(eventName, callListener);
			};
		},
		emit(eventName: string, data: unknown) {
			window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
		},
	};
}

export const eventBus = createEventEmitter();
