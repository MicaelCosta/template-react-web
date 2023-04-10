import styled, { css } from 'styled-components';

interface IButton {
	selected: boolean;
	root?: boolean;
	level: number;
}

export const Button = styled.button<IButton>`
	background: transparent;
	border: 0;
	padding: 0;
	cursor: pointer;
	text-align: left;
	box-shadow: none;
	display: flex;
	gap: 16px;
	align-items: center;
	height: 50px;
	width: 100%;
	line-height: 1;
	padding: 0 16px;
	padding-left: ${({ level }) => level * 16}px;
	color: ${({ theme }) => theme.colors.text};
	transition: 0.25s;

	${({ root }) =>
		root &&
		css`
			:hover {
				background: ${({ theme }) => theme.colors.cinza3};
			}
		`}

	${({ root }) =>
		!root &&
		css`
			padding-left: 64px;

			:hover {
				background: ${({ theme }) => theme.colors.cinza3};
			}

			::before {
				position: absolute;
				top: 50%;
				left: 36px;
				translate: 0 -50%;
				width: 5px;
				height: 5px;
				border-radius: 50%;
			}
		`}

	${({ selected, root }) =>
		root &&
		selected &&
		css`
			background: ${({ theme }) => theme.colors.cinza4};
		`}

	${({ selected, root }) =>
		!root &&
		selected &&
		css`
			background: ${({ theme }) => theme.colors.cinza4};
		`}
`;

interface ISubNav {
	selected: boolean;
}

export const SubNav = styled.div<ISubNav>`
	position: relative;
	display: none;
	background: ${({ theme }) => theme.colors.cinza4};

	${({ selected }) =>
		selected &&
		css`
			display: block;
		`}
`;

export const SubNavItem = styled.div`
	width: 100%;
`;
