import type { Meta, StoryObj } from '@storybook/react';
import UsageBar from './UsageBar';

const meta = {
	title: 'Molecules/UsageBar',
	component: UsageBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		used: { control: { type: 'range', min: 0, max: 2000 } },
		entitlement: { control: { type: 'number' } },
	},
} satisfies Meta<typeof UsageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'API Requests',
		used: 450,
		entitlement: 1000,
		unit: 'requests',
	},
};

export const HighUsage: Story = {
	args: {
		label: 'Storage',
		used: 850,
		entitlement: 1000,
		unit: 'GB',
	},
};

export const OverLimit: Story = {
	args: {
		label: 'Active Users',
		used: 120,
		entitlement: 100,
		unit: 'users',
	},
};

export const Multiple: Story = {
	render: () => (
		<div className='w-[400px] space-y-6 p-6 border rounded-lg bg-card'>
			<h3 className='font-semibold mb-4'>Current Usage</h3>
			<UsageBar label='Monthly Active Users' used={4500} entitlement={5000} unit='users' />
			<UsageBar label='Database Storage' used={12.5} entitlement={20} unit='GB' />
			<UsageBar label='Support Tickets' used={15} entitlement={10} unit='tickets' />
		</div>
	),
};
