import { INavItem } from './interfaces';
import { NavBarProvider } from './hooks';
import { NavItem } from './components';

import { Container, Header } from './styles';

const routesUser: INavItem[] = [
	{
		id: '0',
		descricao: 'Home',
	},
	{
		id: '1',
		descricao: 'Menu',
		children: [
			{
				id: '1-1',
				descricao: 'Sub Menu',
			},
		],
	},
	{
		id: '2',
		descricao: 'Menu 2',
		children: [
			{
				id: '2-1',
				descricao: 'Sub Menu 2',
				children: [
					{
						id: '2-1-1',
						descricao: 'Sub Sub Menu 2',
					},
				],
			},
		],
	},
];

export function Navbar() {
	return (
		<Container className="sidebar">
			<Header>
				<h1>Navbar</h1>
			</Header>

			<NavBarProvider>
				{routesUser.map(route => (
					<NavItem key={route.id} route={route} level={0} />
				))}
			</NavBarProvider>
		</Container>
	);
}
