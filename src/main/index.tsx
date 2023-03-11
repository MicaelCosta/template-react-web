import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '@/main/routes/router';
import { GlobalStyle } from '@/presentation/styles/global';
import { ThemeProvider } from 'styled-components';

import Theme from '@/presentation/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	</StrictMode>,
);
