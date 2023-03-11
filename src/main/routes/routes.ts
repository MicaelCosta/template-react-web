import { ReactElement } from 'react';
import { DashboardConfig, LoginConfig } from '@/presentation/pages';

export interface IRouteConfig {
	config: {
		toolbar: boolean;
		navbar: boolean;
	};
	path: string;
	element: ReactElement;
}

export const routes: IRouteConfig[] = [DashboardConfig, LoginConfig];
