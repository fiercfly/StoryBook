import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui';
import React from 'react';
import SidebarNav, { NavItem } from './SidebarMenu';
import FlexpriceSidebarFooter from './SidebarFooter';
import { Settings, Landmark, Layers2, CodeXml, Puzzle, GalleryHorizontalEnd, Home, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const AppSidebar: React.FC<React.ComponentProps<typeof Sidebar>> = ({ ...props }) => {
	const { open: sidebarOpen } = useSidebar();
	const navMain: NavItem[] = [
		{
			title: 'Home',
			url: '/',
			icon: Home,
		},
		{
			title: 'Product Catalog',
			url: '/features',
			icon: Layers2,
			items: [
				{
					title: 'Features',
					url: '/features',
				},
				{
					title: 'Plans',
					url: '/plans',
				},
				{
					title: 'Coupons',
					url: '/coupons',
				},
			],
		},
		{
			title: 'Billing',
			url: '/customers',
			icon: Landmark,
			items: [
				{
					title: 'Customers',
					url: '/customers',
				},
				{
					title: 'Subscriptions',
					url: '/subscriptions',
				},
				{
					title: 'Invoices',
					url: '/invoices',
				},
			],
		},
		{
			title: 'Revenue',
			url: '/revenue',
			icon: BarChart3,
		},
		{
			title: 'Developers',
			url: '/events',
			icon: CodeXml,
			items: [
				{
					title: 'API Keys',
					url: '/api-keys',
				},
				{
					title: 'Webhooks',
					url: '/webhooks',
				},
			],
		},
		{
			title: 'Integrations',
			url: '/integrations',
			icon: Puzzle,
		},
	];
	return (
		<Sidebar
			collapsible='icon'
			{...props}
			className={cn('border-r-[1.5px] border-gray-300 py-1 bg-[#f9f9f9]', sidebarOpen ? 'px-3' : 'px-2')}>
			<SidebarHeader>
				<div className='p-2 font-bold text-xl'>FlexPrice</div>
			</SidebarHeader>
			<SidebarContent className='gap-0 mt-1'>
				<SidebarNav items={navMain} />
			</SidebarContent>
			<SidebarFooter>
				<FlexpriceSidebarFooter />
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
