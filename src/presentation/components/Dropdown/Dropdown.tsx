import { SelectHTMLAttributes } from 'react';
import { Container, Select, Option } from './styles';

interface IOption {
	value: string;
	text: string;
}

interface IDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
	listOptions: IOption[];
}

export function Dropdown({ listOptions, ...props }: IDropdownProps) {
	return (
		<Container>
			<Select {...props}>
				{listOptions.map(option => (
					<Option key={option.value} value={option.value}>
						{option.text}
					</Option>
				))}
			</Select>
		</Container>
	);
}
