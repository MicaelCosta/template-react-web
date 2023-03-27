import { useMemo } from 'react';
import { useNavbarContext } from '@/presentation/components/Navbar/hooks';
import { INavItem } from '@/presentation/components/Navbar/interfaces';

import { Button, SubNav, SubNavItem } from './styles';

interface INavItemProps {
	route: INavItem;
	level: number;
}

export function NavItem({ route, level }: INavItemProps) {
	const { idSelected, onSelect } = useNavbarContext();

	const selected = useMemo(() => {
		const listIdsSelected = idSelected.split('-');
		const listIdsRoute = route.id.split('-');
		const levelActual = level + 1;

		if (listIdsSelected.length >= levelActual) {
			return listIdsSelected[level] === listIdsRoute[level];
		}

		return false;
	}, [route, level, idSelected]);

	return (
		<>
			<Button
				onClick={() => onSelect(route.id)}
				selected={selected}
				root={true}
			>
				<span>{route.descricao}</span>
			</Button>

			{!!route.children && (
				<SubNav selected={selected}>
					<SubNavItem>
						{route.children.map(subRoute => (
							<NavItem
								key={subRoute.id}
								route={subRoute}
								level={level + 1}
							/>
						))}
					</SubNavItem>
				</SubNav>
			)}
		</>
	);
}
