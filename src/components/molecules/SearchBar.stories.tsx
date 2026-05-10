import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import SearchBar from './SearchBar';

const meta = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		onSearch: { action: 'searched' },
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Search customers...',
		onSearch: fn(),
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
		placeholder: 'Searching...',
	},
};

export const WithDefaultValue: Story = {
	args: {
		defaultValue: 'Acme Corp',
	},
};

export const Interactive: Story = {
	args: {
		placeholder: 'Type to search...',
		onSearch: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Type to search...');

		await userEvent.type(input, 'FlexPrice', { delay: 100 });
		await expect(input).toHaveValue('FlexPrice');

		// Wait for debounce
		await new Promise((resolve) => setTimeout(resolve, 500));
		await expect(args.onSearch).toHaveBeenCalledWith('FlexPrice');
	},
};
