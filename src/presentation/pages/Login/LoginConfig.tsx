import { IRouteConfig } from '@/main/routes/routes';
import { MakeLogin } from '@/main/factories/pages';

export const LoginConfig: IRouteConfig = {
	config: {
		toolbar: false,
		navbar: false,
	},
	path: '/login',
	element: <MakeLogin />,
};
