import history from '@/infra/navigator/history';

export function GetBasename(): string {
	let baseName = '';
	if (!(process.env.NODE_ENV === 'development')) {
		baseName = process.env.PUBLIC_URL || ''; // Utilizado para V3 que é um subApplication do V2
	}

	return baseName;
}

export function RouteWithBasename(route: string): string {
	return `${GetBasename()}${route}`;
}

export function NavigateToRoute(route: string): void {
	history.push(RouteWithBasename(route));
}
