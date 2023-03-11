import { NavigateToRoute } from '@/presentation/util';

export function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
			<button onClick={() => NavigateToRoute('/login')}>Login</button>
		</div>
	);
}
