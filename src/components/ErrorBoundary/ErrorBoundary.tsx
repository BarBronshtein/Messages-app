import React from 'react';
import NotFound from '@/pages/NotFound/NotFound';
class ErrorBoundary extends React.Component<
	{ children: React.ReactNode },
	{ hasError: boolean }
> {
	constructor(props: { children: React.ReactNode }) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.

		return { hasError: true, msg: { txt: error.message, name: error.name } };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo);
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <NotFound error />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
