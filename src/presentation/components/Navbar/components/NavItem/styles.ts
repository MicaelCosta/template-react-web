import styled, { css } from 'styled-components';

interface IButton {
	selected: boolean;
	root?: boolean;
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
	padding: 0 16px 0 25px;
	color: ${({ theme }) => theme.colors.text};
	transition: 0.25s;

	${({ root }) =>
		root &&
		css`
			:hover {
				background: ${({ theme }) => theme.colors.cinza4};
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
			background: ${({ theme }) => theme.colors.cinza3};
		`}
`;

interface ISubNav {
	selected: boolean;
}

export const SubNav = styled.div<ISubNav>`
	position: relative;
	overflow: hidden;
	height: 0;
	transition: 0.4s;
	background: ${({ theme }) => theme.colors.cinza4};

	${({ selected }) =>
		selected &&
		css`
			height: 100px;
		`}
`;

export const SubNavItem = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;
