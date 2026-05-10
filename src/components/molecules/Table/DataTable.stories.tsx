import type { Meta, StoryObj } from '@storybook/react';
import FlexpriceTable from './Table';
import { Badge } from '@/components/ui/badge';

const meta = {
	title: 'Molecules/DataTable',
	component: FlexpriceTable,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FlexpriceTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
	{ title: 'ID', fieldName: 'id', width: 100 },
	{ title: 'Customer', fieldName: 'customer', flex: 2 },
	{
		title: 'Status',
		render: (row: any) => <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>{row.status}</Badge>,
		width: 120,
	},
	{ title: 'Amount', fieldName: 'amount', align: 'right' as const, width: 150 },
];

const data = [
	{ id: 'INV-001', customer: 'Acme Corp', status: 'Active', amount: '$1,200.00' },
	{ id: 'INV-002', customer: 'Global Tech', status: 'Pending', amount: '$850.00' },
	{ id: 'INV-003', customer: 'Stark Industries', status: 'Active', amount: '$5,000.00' },
	{ id: 'INV-004', customer: 'Wayne Ent', status: 'Archived', amount: '$2,100.00' },
];

export const Default: Story = {
	args: {
		columns: columns as any,
		data: data,
	},
};

export const Empty: Story = {
	args: {
		columns: columns as any,
		data: [],
		showEmptyRow: true,
		emptyState: (
			<div className='flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500'>
				<div className='rounded-full bg-muted p-3 mb-4'>
					<svg
						className='w-6 h-6 text-muted-foreground'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
						/>
					</svg>
				</div>
				<h3 className='text-lg font-semibold'>No customers found</h3>
				<p className='text-sm text-muted-foreground mt-1 max-w-sm'>
					Get started by creating a new customer or adjusting your search filters.
				</p>
			</div>
		),
	},
};
