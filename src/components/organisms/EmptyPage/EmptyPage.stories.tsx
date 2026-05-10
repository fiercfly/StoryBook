import type { Meta, StoryObj } from '@storybook/react';
import EmptyPage from './EmptyPage';
import { PackageOpen, Users, Receipt, CreditCard } from 'lucide-react';

const meta = {
	title: 'Organisms/EmptyState',
	component: EmptyPage,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof EmptyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: <Receipt className='size-12' />,
		heading: 'No invoices found',
		description: 'You haven’t created any invoices yet. Create your first invoice to start billing your customers.',
		buttonLabel: 'Create your first invoice',
		buttonAction: () => alert('Action clicked'),
	},
};

export const Customers: Story = {
	args: {
		icon: <Users className='size-12' />,
		heading: 'Build your customer base',
		description: 'Import your existing customers or add them manually to get started with FlexPrice.',
		buttonLabel: 'Add Customer',
		buttonAction: () => alert('Action clicked'),
	},
};

export const Plans: Story = {
	args: {
		icon: <PackageOpen className='size-12' />,
		heading: 'No plans yet',
		description: 'Define your pricing plans to start offering subscriptions to your users.',
		buttonLabel: 'Create Plan',
		buttonAction: () => alert('Action clicked'),
	},
};
