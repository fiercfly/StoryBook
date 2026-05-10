import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import Button from '../Button';
import { HelpCircle } from 'lucide-react';

const meta = {
	title: 'Atoms/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <Button variant='outline'>Hover me</Button>,
		content: 'This is a helpful tooltip',
	},
};

export const WithIcon: Story = {
	args: {
		children: <HelpCircle className='size-4 text-muted-foreground cursor-help' />,
		content: 'Click to learn more about usage-based billing',
	},
};

export const CustomDelay: Story = {
	args: {
		children: <Button variant='ghost'>Slow Tooltip</Button>,
		content: 'I take 1 second to appear',
		delayDuration: 1000,
	},
};

export const Sides: Story = {
	render: () => (
		<div className='flex gap-4'>
			<Tooltip content='Tooltip on top' side='top'>
				<Button variant='outline'>Top</Button>
			</Tooltip>
			<Tooltip content='Tooltip on right' side='right'>
				<Button variant='outline'>Right</Button>
			</Tooltip>
			<Tooltip content='Tooltip on bottom' side='bottom'>
				<Button variant='outline'>Bottom</Button>
			</Tooltip>
			<Tooltip content='Tooltip on left' side='left'>
				<Button variant='outline'>Left</Button>
			</Tooltip>
		</div>
	),
};
