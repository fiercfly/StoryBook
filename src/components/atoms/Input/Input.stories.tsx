import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import Input from './Input';
import { Mail, Search, DollarSign } from 'lucide-react';
import { useState } from 'react';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['text', 'number', 'formatted-number', 'integer'],
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'default', 'lg', 'xl'],
		},
		onChange: { action: 'changed' },
	},
	args: {
		placeholder: 'Enter text...',
		label: 'Label',
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Username',
		placeholder: 'e.g. johndoe',
	},
};

export const WithDescription: Story = {
	args: {
		label: 'Password',
		type: 'password',
		description: 'Must be at least 8 characters long.',
		placeholder: '••••••••',
	},
};

export const WithError: Story = {
	args: {
		label: 'Email',
		type: 'email',
		error: 'Please enter a valid email address.',
		value: 'invalid-email',
	},
};

export const CurrencyInput: Story = {
	args: {
		label: 'Amount',
		variant: 'formatted-number',
		inputPrefix: <DollarSign className='size-4 text-muted-foreground' />,
		placeholder: '0.00',
		suffix: 'USD',
	},
};

export const SearchInput: Story = {
	args: {
		placeholder: 'Search...',
		inputPrefix: <Search className='size-4 text-muted-foreground' />,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Field',
		disabled: true,
		value: 'Cannot edit this',
	},
};

/**
 * Interactive story with state management.
 */
export const Interactive: Story = {
	render: (args) => {
		const [value, setValue] = useState('');
		return (
			<div className='w-[300px]'>
				<Input
					{...args}
					value={value}
					onChange={(val) => {
						setValue(val);
						args.onChange?.(val);
					}}
				/>
				<p className='mt-2 text-sm text-muted-foreground'>Current value: {value}</p>
			</div>
		);
	},
	args: {
		label: 'Type something',
		placeholder: 'Type to test...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Type to test...');

		await userEvent.type(input, 'Hello World');
		await expect(input).toHaveValue('Hello World');
	},
};
