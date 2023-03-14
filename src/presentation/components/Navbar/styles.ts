import styled from 'styled-components';

export const Container = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	width: 260px;
	height: 100%;
	background: ${({ theme }) => theme.colors.background};
	transition: width 0.4s;
	overflow-y: auto;

	display: flex;
	flex-direction: column;

	button {
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

		.active {
			background: ${({ theme }) => theme.colors.cinza4};
		}

		:hover {
			background: ${({ theme }) => theme.colors.cinza4};
		}
	}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	height: 72px;
`;

export const Button = styled.button`
	background: transparent;
	border: 0;
	padding: 0;
	cursor: pointer;
	text-align: left;
`;

export const SubNav = styled.div`
	position: relative;
	overflow: hidden;
	height: 0;
	transition: 0.4s;
	background: ${({ theme }) => theme.colors.cinza4};

	button {
		padding-left: 64px;

		::before {
			position: absolute;
			top: 50%;
			left: 36px;
			translate: 0 -50%;
			width: 5px;
			height: 5px;
			border-radius: 50%;
		}

		:hover {
			background: ${({ theme }) => theme.colors.cinza3};
		}

		.active {
			background: ${({ theme }) => theme.colors.cinza3};
		}
	}
`;

export const SubNavItem = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;
