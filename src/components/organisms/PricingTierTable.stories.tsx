import type { Meta, StoryObj } from '@storybook/react';
import PricingTierTable from './PricingTierTable';

const meta = {
	title: 'Organisms/PricingTierTable',
	component: PricingTierTable,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tiered: Story = {
	args: {
		unit: 'API Requests',
		currency: 'USD',
		billingPeriod: 'monthly',
		tiers: [
			{ upto: 1000, unitPrice: 0.05, flatFee: 10 },
			{ upto: 5000, unitPrice: 0.03 },
			{ upto: 'unlimited', unitPrice: 0.01 },
		],
	},
};

export const Graduated: Story = {
	args: {
		unit: 'GB Storage',
		currency: 'EUR',
		billingPeriod: 'yearly',
		tiers: [
			{ upto: 100, unitPrice: 0.5 },
			{ upto: 500, unitPrice: 0.4 },
			{ upto: 'unlimited', unitPrice: 0.3 },
		],
	},
};

export const FlatFeeOnly: Story = {
	args: {
		unit: 'Users',
		tiers: [
			{ upto: 10, unitPrice: 0, flatFee: 50 },
			{ upto: 50, unitPrice: 0, flatFee: 200 },
			{ upto: 'unlimited', unitPrice: 0, flatFee: 500 },
		],
	},
};
