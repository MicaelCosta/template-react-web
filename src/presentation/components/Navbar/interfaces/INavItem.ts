export interface INavItem {
	id: string;
	descricao: string;
	children?: INavItem[];
}
