import React from 'react';
import './App.css';

//Pages
import RepoList from './Pages/RepoList';
import ErrorBoundary from './ErrorHandling/ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<RepoList />
		</ErrorBoundary>
	);
}

export default App;
