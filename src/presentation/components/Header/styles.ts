import styled from 'styled-components';

export const Container = styled.header`
	height: 60px;
	width: 100%;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border-bottom: solid 1px ${({ theme }) => theme.colors.cinza4};
`;
