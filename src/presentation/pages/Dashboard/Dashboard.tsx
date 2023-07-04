import { NavigateToRoute } from '@/presentation/util';
import { TextInput, Dropdown } from '@/presentation/components';

export function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
			<button onClick={() => NavigateToRoute('/login')}>Login</button>

			<div style={{ margin: 10 }}>
				<TextInput placeholder="input de teste" />
			</div>

			<div style={{ margin: 10 }}>
				<Dropdown listOptions={[{ text: 'Item 1', value: '1' }]} />
			</div>
		</div>
	);
}
