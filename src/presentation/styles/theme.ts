export interface ITheme {
	mode: 'light' | 'dark';
	colors: {
		primary: string;
		secundary: string;
		background: string;
		text: string;
		light: string;
		dark: string;
		error: string;
		success: string;
		warning: string;
		cinza1: string;
		cinza2: string;
		cinza3: string;
		cinza4: string;
	};
	fonts: {
		regular: string;
		semibold: string;
		bold: string;
	};
}

const theme: ITheme = {
	mode: 'light',
	colors: {
		primary: '#001f46',
		secundary: '#d2ae6d',
		text: '#333',
		background: '#F5F5F5',
		light: '#FFF',
		dark: '#000',
		error: '#FD2F2F',
		success: '#0C9B2C',
		warning: '#FFDF00',
		cinza1: '#666',
		cinza2: '#999',
		cinza3: '#CCC',
		cinza4: '#DDD',
	},
	fonts: {
		regular: 'Poppins-Regular',
		semibold: 'Poppins-SemiBold',
		bold: 'Poppins-Bold',
	},
};

export default theme;
