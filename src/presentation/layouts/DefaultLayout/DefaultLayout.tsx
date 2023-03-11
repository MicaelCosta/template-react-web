import { useRoutes, matchRoutes, useLocation } from 'react-router-dom';
import { Header } from '@/presentation/components';
import { useAppContext } from '@/presentation/hooks';

import { Container } from './styles';

export function DefaultLayout() {
	const { routes } = useAppContext();

	const location = useLocation();
	const { pathname } = location;

	const matchedRoutes = matchRoutes(routes, pathname);
	const matched = matchedRoutes ? matchedRoutes[0] : false;

	return (
		<Container>
			{!!matched && !!matched?.route?.config?.toolbar && <Header />}

			{useRoutes(routes)}
		</Container>
	);
}
