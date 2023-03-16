import { useState } from 'react';
import { Button, Container, Header, SubNav, SubNavItem } from './styles';

export function Navbar() {
	const [idSelected, setIdSelected] = useState(0);

	const subNavs = document.querySelectorAll('.subNav');
	const buttons = document.querySelectorAll('.sidebar button');

	function handleClick(subNav) {
		const subNavOuter = document.querySelector(`#${subNav}`);
		const subNavInner = document.querySelector(`#${subNav} .subnav-inner`);

		const button = subNavOuter.previousElementSibling;

		if (subNavOuter?.clientHeight > 0) {
			button?.classList.remove('active');
			subNavOuter.style.height = 0;
		} else {
			button?.classList.add('active');
			subNavOuter.style.height = `${subNavInner.clientHeight}px`;
		}
	}

	function handleSelect(id: number) {
		setIdSelected(id);
	}

	return (
		<Container className="sidebar">
			<Header>
				<h1>Navbar</h1>
			</Header>

			<Button
				onClick={() => handleSelect(0)}
				selected={0 === idSelected}
				root
			>
				<span>Home</span>
			</Button>

			<Button
				onClick={() => handleSelect(1)}
				selected={1 === idSelected}
				root
			>
				<span>Login</span>
			</Button>

			<SubNav selected={1 === idSelected}>
				<SubNavItem>
					<Button selected={false}>
						<span>Submenu</span>
					</Button>
				</SubNavItem>
			</SubNav>

			<Button
				onClick={() => handleSelect(2)}
				selected={2 === idSelected}
				root
			>
				<span>Opcao 2</span>
			</Button>

			<SubNav selected={2 === idSelected}>
				<SubNavItem>
					<Button selected={false}>
						<span>Submenu2</span>
					</Button>
					<Button selected={false}>
						<span>Submenu3</span>
					</Button>
				</SubNavItem>
			</SubNav>
		</Container>
	);
}
