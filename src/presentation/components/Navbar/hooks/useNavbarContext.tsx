import { createContext, useContext, useState, useCallback } from 'react';

interface INavbarContextProps {
	idSelected: string;
	onSelect: (id: string) => void;
}

const NavbarContext = createContext<INavbarContextProps>(
	{} as INavbarContextProps,
);

export function useNavbarContext() {
	const context = useContext(NavbarContext);

	return context;
}

interface INavbarProps {
	children: React.ReactNode;
}

export function NavBarProvider({ children }: INavbarProps) {
	const [idSelected, setIdSelected] = useState('0');

	const onSelect = useCallback((id: string) => {
		setIdSelected(id);
	}, []);

	return (
		<NavbarContext.Provider
			value={{
				idSelected,
				onSelect,
			}}
		>
			{children}
		</NavbarContext.Provider>
	);
}
