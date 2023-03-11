import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MakeDashboard } from '@/main/factories/pages';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MakeDashboard />,
	},
]);

export function Router() {
	return <RouterProvider router={routes} />;
}
