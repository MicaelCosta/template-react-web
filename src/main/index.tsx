import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from '@/main/routes/router';
import { GlobalStyle } from '@/presentation/styles/global';
import { AppProvider } from '@/presentation/hooks';
import { DefaultLayout } from '@/presentation/layouts';
import Theme from '@/presentation/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />

			<AppProvider>
				<BrowserRouter>
					<DefaultLayout />
				</BrowserRouter>
			</AppProvider>
		</ThemeProvider>
	</StrictMode>,
);
