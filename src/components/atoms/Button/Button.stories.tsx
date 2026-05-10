import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within, expect } from '@storybook/test';
import Button from './Button';
import { Mail, ArrowRight } from 'lucide-react';

/**
 * A versatile button component that supports various styles, sizes, and states.
 * Built with Radix UI Slot for composition and CVA for styling.
 */
const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'black', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
			description: 'The visual style of the button',
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon', 'xs'],
			description: 'The size of the button',
		},
		isLoading: {
			control: 'boolean',
			description: 'Shows a loading spinner and disables the button',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the button',
		},
	},
	args: {
		onClick: fn(),
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default primary button.
 */
export const Default: Story = {
	args: {
		variant: 'default',
		children: 'Click me',
	},
};

/**
 * Variants gallery.
 */
export const Variants: Story = {
	args: {
		isLoading: true,
	},

	render: (args) => (
		<div className='flex flex-wrap gap-4'>
			<Button {...args} variant='default'>
				Default
			</Button>
			<Button {...args} variant='black'>
				Black
			</Button>
			<Button {...args} variant='secondary'>
				Secondary
			</Button>
			<Button {...args} variant='outline'>
				Outline
			</Button>
			<Button {...args} variant='ghost'>
				Ghost
			</Button>
			<Button {...args} variant='destructive'>
				Destructive
			</Button>
			<Button {...args} variant='link'>
				Link
			</Button>
		</div>
	),
};

/**
 * Sizes gallery.
 */
export const Sizes: Story = {
	render: (args) => (
		<div className='flex items-center gap-4'>
			<Button {...args} size='xs'>
				Extra Small
			</Button>
			<Button {...args} size='sm'>
				Small
			</Button>
			<Button {...args} size='default'>
				Default
			</Button>
			<Button {...args} size='lg'>
				Large
			</Button>
			<Button {...args} size='icon'>
				<Mail className='size-4' />
			</Button>
		</div>
	),
};

/**
 * Button in a loading state.
 */
export const Loading: Story = {
	args: {
		isLoading: true,
		children: 'Loading',
	},
};

/**
 * Button with icons.
 */
export const WithIcons: Story = {
	args: {
		prefixIcon: <Mail className='size-4' />,
		suffixIcon: <ArrowRight className='size-4' />,
		children: 'Contact Us',
	},
};

/**
 * Interaction test to ensure the button responds to clicks.
 */
export const Interaction: Story = {
	args: {
		children: 'Interactive Button',
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		await userEvent.click(button);
		await expect(args.onClick).toHaveBeenCalled();
	},
};
