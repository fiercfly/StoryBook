import type { Meta, StoryObj } from '@storybook/react';
import MetricCard from './MetricCard';

const meta = {
	title: 'Molecules/MetricCard',
	component: MetricCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		value: { control: 'number' },
	},
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Total Revenue',
		value: 12500.5,
		currency: 'USD',
	},
};

export const WithTrendUp: Story = {
	args: {
		title: 'Active Subscriptions',
		value: 1240,
		showChangeIndicator: true,
		isNegative: false,
	},
};

export const WithTrendDown: Story = {
	args: {
		title: 'Churn Rate',
		value: 2.4,
		isPercent: true,
		showChangeIndicator: true,
		isNegative: true,
	},
};

export const Percentage: Story = {
	args: {
		title: 'Growth Rate',
		value: 15.8,
		isPercent: true,
	},
};

export const Grid: Story = {
	render: () => (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[800px]'>
			<MetricCard title='Total MRR' value={45230.12} currency='USD' showChangeIndicator />
			<MetricCard title='Total Customers' value={1250} showChangeIndicator />
			<MetricCard title='Average ARPU' value={36.5} currency='USD' showChangeIndicator isNegative />
		</div>
	),
};
