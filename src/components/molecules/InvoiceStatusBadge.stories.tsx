import type { Meta, StoryObj } from '@storybook/react';
import InvoiceStatusBadge from './InvoiceStatusBadge';

const meta = {
	title: 'Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: ['draft', 'paid', 'void', 'pending', 'failed', 'processing', 'refunded'],
		},
	},
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = {
	args: {
		status: 'paid',
	},
};

export const Draft: Story = {
	args: {
		status: 'draft',
	},
};

export const Failed: Story = {
	args: {
		status: 'failed',
	},
};

export const AllStatuses: Story = {
	render: () => (
		<div className='flex flex-wrap gap-4'>
			<InvoiceStatusBadge status='draft' />
			<InvoiceStatusBadge status='pending' />
			<InvoiceStatusBadge status='processing' />
			<InvoiceStatusBadge status='paid' />
			<InvoiceStatusBadge status='failed' />
			<InvoiceStatusBadge status='void' />
			<InvoiceStatusBadge status='refunded' />
		</div>
	),
};
