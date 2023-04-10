import styled from 'styled-components';

export const Container = styled.aside`
	position: sticky;
	top: 0;
	left: 0;
	width: 260px;
	height: 100%;
	background: ${({ theme }) => theme.colors.background};
	border-right: solid 1px ${({ theme }) => theme.colors.cinza4};
	transition: width 0.4s;
	overflow-y: auto;

	display: flex;
	flex-direction: column;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	height: 72px;
`;
