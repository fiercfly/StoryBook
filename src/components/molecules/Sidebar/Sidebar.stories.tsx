import type { Meta, StoryObj } from '@storybook/react';
import AppSidebar from './Sidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { BrowserRouter } from 'react-router';

/**
 * The main sidebar navigation for the FlexPrice application.
 * Supports collapsible states and nested navigation items.
 */
const meta = {
	title: 'Organisms/SidebarNav',
	component: AppSidebar,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<BrowserRouter>
				<SidebarProvider>
					<div className='flex h-screen w-full'>
						<Story />
						<SidebarInset>
							<div className='p-4 bg-muted/20 h-full'>
								<p className='text-muted-foreground'>Main Content Area</p>
							</div>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</BrowserRouter>
		),
	],
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
	parameters: {
		// We can't easily force the context state from here without a custom wrapper,
		// but the default 'icon' collapsible behavior is shown.
	},
};
