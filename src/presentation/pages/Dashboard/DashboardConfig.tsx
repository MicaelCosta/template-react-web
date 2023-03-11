import { IRouteConfig } from '@/main/routes/routes';
import { MakeDashboard } from '@/main/factories/pages';

export const DashboardConfig: IRouteConfig = {
	config: {
		toolbar: true,
		navbar: true,
	},
	path: '/',
	element: <MakeDashboard />,
};
