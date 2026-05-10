import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { useState } from 'react';

const meta = {
	title: 'Atoms/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'changed' },
	},
	args: {
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'draft', label: 'Draft' },
			{ value: 'archived', label: 'Archived', description: 'No longer in use' },
			{ value: 'void', label: 'Void', disabled: true },
		],
		label: 'Status',
		placeholder: 'Select a status',
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 'active',
	},
};

export const WithDescription: Story = {
	args: {
		description: 'Select the current state of the plan.',
	},
};

export const RadioStyle: Story = {
	args: {
		isRadio: true,
		label: 'Pricing Model',
		options: [
			{ value: 'flat', label: 'Flat Fee', description: 'A fixed amount per billing period' },
			{ value: 'per_unit', label: 'Per Unit', description: 'Charged based on the number of units' },
			{ value: 'tiered', label: 'Tiered', description: 'Different prices for different ranges' },
		],
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		value: 'active',
	},
};

export const Interactive: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value || '');
		return (
			<div className='w-[300px]'>
				<Select
					{...args}
					value={value}
					onChange={(val) => {
						setValue(val);
						args.onChange?.(val);
					}}
				/>
				<p className='mt-4 text-sm text-muted-foreground'>Selected: {value || 'None'}</p>
			</div>
		);
	},
};
