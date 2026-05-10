import type { Meta, StoryObj } from '@storybook/react';
import DateRangePicker from './DateRangePicker';
import { useState } from 'react';
import { subDays, addDays } from 'date-fns';

const meta = {
	title: 'Molecules/DateRangePicker',
	component: DateRangePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		onChange: { action: 'changed' },
	},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Select dates',
	},
};

export const WithTitle: Story = {
	args: {
		title: 'Billing Period',
		placeholder: 'Pick a range',
	},
};

export const Preselected: Story = {
	args: {
		startDate: subDays(new Date(), 7),
		endDate: new Date(),
		title: 'Last 7 Days',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		title: 'Selection Disabled',
	},
};

export const Interactive: Story = {
	render: (args) => {
		const [range, setRange] = useState<{ startDate?: Date; endDate?: Date }>({
			startDate: args.startDate,
			endDate: args.endDate,
		});

		return (
			<div className='w-[300px]'>
				<DateRangePicker
					{...args}
					startDate={range.startDate}
					endDate={range.endDate}
					onChange={(newRange) => {
						setRange(newRange);
						args.onChange?.(newRange);
					}}
				/>
				{range.startDate && range.endDate && (
					<div className='mt-4 p-3 bg-muted rounded-md text-xs'>
						<p>
							<strong>Start:</strong> {range.startDate.toDateString()}
						</p>
						<p>
							<strong>End:</strong> {range.endDate.toDateString()}
						</p>
					</div>
				)}
			</div>
		);
	},
};
