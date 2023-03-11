import { NavigateToRoute } from '@/presentation/util';

export function Login() {
	return (
		<div>
			<h1>Login</h1>
			<button onClick={() => NavigateToRoute('/')}>Dashboard</button>
		</div>
	);
}
