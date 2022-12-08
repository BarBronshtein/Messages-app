function createEventEmitter() {
	return {
		on(eventName: string, listener: Function) {
			const callListener = ({ detail }: any) => {
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

export const eventBus = createEventEmitter();
