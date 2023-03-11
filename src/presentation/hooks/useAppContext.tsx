import { createContext, useContext } from 'react';
import { IRouteConfig, routes } from '@/main/routes/routes';

interface IAppContextProps {
	routes: IRouteConfig[];
}

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

export function useAppContext() {
	const context = useContext(AppContext);

	return context;
}

interface IAppProps {
	children: React.ReactNode;
}

export function AppProvider({ children }: IAppProps) {
	return (
		<AppContext.Provider
			value={{
				routes,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
