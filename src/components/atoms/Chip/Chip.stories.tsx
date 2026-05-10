import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';
import { Check, Info, AlertTriangle, XCircle } from 'lucide-react';

/**
 * A status indicator or label component.
 * Used for plans, invoices, and subscriptions status.
 */
const meta = {
	title: 'Atoms/Badge (Chip)',
	component: Chip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'failed', 'info'],
			description: 'The visual style variant',
		},
		label: {
			control: 'text',
			description: 'The text content of the badge',
		},
		disabled: {
			control: 'boolean',
		},
	},
	args: {
		label: 'Badge',
		variant: 'default',
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Draft',
		variant: 'default',
	},
};

export const Success: Story = {
	args: {
		label: 'Paid',
		variant: 'success',
		icon: <Check className='size-3' />,
	},
};

export const Warning: Story = {
	args: {
		label: 'Pending',
		variant: 'warning',
		icon: <AlertTriangle className='size-3' />,
	},
};

export const Failed: Story = {
	args: {
		label: 'Void',
		variant: 'failed',
		icon: <XCircle className='size-3' />,
	},
};

export const InfoVariant: Story = {
	args: {
		label: 'Active',
		variant: 'info',
		icon: <Info className='size-3' />,
	},
};

/**
 * Displaying all variants together.
 */
export const AllVariants: Story = {
	render: () => (
		<div className='flex gap-4'>
			<Chip variant='default' label='Default' />
			<Chip variant='success' label='Success' icon={<Check className='size-3' />} />
			<Chip variant='warning' label='Warning' icon={<AlertTriangle className='size-3' />} />
			<Chip variant='failed' label='Failed' icon={<XCircle className='size-3' />} />
			<Chip variant='info' label='Info' icon={<Info className='size-3' />} />
		</div>
	),
};

export const Clickable: Story = {
	args: {
		label: 'Clickable Badge',
		onClick: () => alert('Badge clicked!'),
	},
};
