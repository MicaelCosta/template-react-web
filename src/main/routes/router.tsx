import { useState, useLayoutEffect, ReactNode } from 'react';
import { Router } from 'react-router-dom';
import history from '@/infra/navigator/history';
import { GetBasename } from '@/presentation/util';

interface IBrowserRouterProps {
	children: ReactNode;
}

export function BrowserRouter({ children }: IBrowserRouterProps) {
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			basename={GetBasename()}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		>
			{children}
		</Router>
	);
}
