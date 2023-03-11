import 'styled-components';
import { ITheme } from '@/presentation/styles/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
