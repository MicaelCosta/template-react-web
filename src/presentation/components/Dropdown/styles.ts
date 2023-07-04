import styled from 'styled-components';

export const Container = styled.div``;

export const Select = styled.select`
	width: 100%;
	height: 50px;

	padding: 8px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.cinza3};
	border-radius: 5px;

	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	font-size: 1rem;

	:focus,
	:focus-within,
	:focus-visible {
		border-width: 2px;
		border-color: ${({ theme }) => theme.colors.secundary};
	}
`;

export const Option = styled.option`
	width: 100%;
	height: 50px;

	padding: 8px;
	border-radius: 5px;

	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.text};
	font-size: 1rem;
`;
