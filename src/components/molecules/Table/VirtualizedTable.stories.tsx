import type { Meta, StoryObj } from '@storybook/react';
import VirtualizedTable from './VirtualizedTable';

const meta = {
	title: 'Molecules/VirtualizedTable',
	component: VirtualizedTable,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof VirtualizedTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Generate 10,000 mock rows
const mockData = Array.from({ length: 10000 }, (_, i) => ({
	id: `CUST-${i + 1}`,
	name: `Customer ${i + 1}`,
	email: `customer${i + 1}@example.com`,
	status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Inactive' : 'Archived',
	revenue: `$${(Math.random() * 10000).toFixed(2)}`,
}));

const columns = [
	{ title: 'ID', fieldName: 'id', width: 100 },
	{ title: 'Name', fieldName: 'name', flex: 2 },
	{ title: 'Email', fieldName: 'email', flex: 2 },
	{ title: 'Status', fieldName: 'status', width: 120 },
	{ title: 'Revenue', fieldName: 'revenue', align: 'right' as const, width: 150 },
];

export const LargeDataset: Story = {
	args: {
		columns: columns as any,
		data: mockData,
		height: 500,
	},
};

export const CustomHeight: Story = {
	args: {
		columns: columns as any,
		data: mockData.slice(0, 100),
		height: 300,
	},
};
