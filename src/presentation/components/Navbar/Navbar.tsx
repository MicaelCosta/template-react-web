import { Button, Container, Header, SubNav, SubNavItem } from './styles';

export function Navbar() {
	const subNavs = document.querySelectorAll('.subNav');
	const buttons = document.querySelectorAll('.sidebar button');

	function resetSidebar() {
		subNavs.forEach(nav => {
			nav.style.height = 0;
		});

		buttons.forEach(btn => {
			btn.classList.remove('active');
		});
	}

	function handleClick(subNav) {
		resetSidebar();

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

	return (
		<Container className="sidebar">
			<Header>
				<h1>Navbar</h1>
			</Header>

			<Button>
				<span>Home</span>
			</Button>

			<Button onClick={() => handleClick('tools')}>
				<span>Login</span>
			</Button>

			<SubNav id="tools" className="subnav">
				<SubNavItem className="subnav-inner">
					<Button>
						<span>Submenu</span>
					</Button>
				</SubNavItem>
			</SubNav>

			<Button onClick={() => handleClick('tools2')}>
				<span>Opcao 2</span>
			</Button>

			<SubNav id="tools2" className="subnav">
				<SubNavItem className="subnav-inner">
					<Button>
						<span>Submenu2</span>
					</Button>
					<Button>
						<span>Submenu3</span>
					</Button>
				</SubNavItem>
			</SubNav>
		</Container>
	);
}
