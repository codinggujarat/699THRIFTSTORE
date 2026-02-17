import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
                    <h1 className="text-3xl text-red-500 mb-4">Something went wrong.</h1>
                    <pre className="bg-gray-900 p-4 rounded text-sm text-gray-300 overflow-auto max-w-full">
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </pre>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="mt-6 px-4 py-2 bg-white text-black font-bold"
                    >
                        GO HOME
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
