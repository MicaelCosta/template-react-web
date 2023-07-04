import { InputHTMLAttributes } from 'react';
import { Container, Input } from './styles';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ ...props }: ITextInputProps) {
	return (
		<Container>
			<Input {...props} />
		</Container>
	);
}
