import styled from 'styled-components';

export const Container = styled.header`
	height: 60px;
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border: solid 1px ${({ theme }) => theme.colors.cinza2};
`;
