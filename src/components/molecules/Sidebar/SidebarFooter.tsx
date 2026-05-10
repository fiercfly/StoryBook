import { useCallback } from 'react';
import { BookOpen, ExternalLink, ChevronsUpDown, LogOut, Settings } from 'lucide-react';
import { SidebarMenuButton, useSidebar, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

const SidebarFooter = () => {
	const handleLogout = useCallback(() => {
		console.log('Logging out...');
	}, []);

	const { open: sidebarOpen } = useSidebar();
	const user = { email: 'intern@flexprice.io' };

	const dropdownItems = [
		{
			label: 'Settings',
			icon: Settings,
			onClick: () => {
				console.log('Navigate to settings');
			},
		},
		{
			label: 'Logout',
			icon: LogOut,
			onClick: handleLogout,
		},
	];

	return (
		<div className='flex flex-col gap-2 w-full'>
			<SidebarMenuButton
				onClick={() => {
					alert('Documentation is available locally in Storybook.');
				}}
				tooltip={'Documentation'}
				className={cn(`flex items-center justify-between gap-2 hover:bg-muted transition-colors my-0 py-1 `)}>
				<span className='flex items-center gap-2'>
					<BookOpen className={cn('size-5 mr-1 !stroke-[1.5px]')} />
					<span className='text-sm select-none'>{'Documentation'}</span>
				</span>
			</SidebarMenuButton>

			{/* user profile */}
			<Popover>
				<PopoverTrigger asChild>
					<button className='w-full flex items-center justify-between h-10 rounded-[6px] gap-2 px-2 hover:bg-muted transition-colors'>
						<div className='flex items-center gap-1 min-w-0 flex-1'>
							<div className='size-5 text-xs bg-primary text-primary-foreground flex justify-center items-center rounded-full flex-shrink-0 font-medium'>
								{user?.email ? user.email.charAt(0).toUpperCase() : 'F'}
							</div>
							<div className={cn('min-w-0 flex-1 text-left', sidebarOpen ? '' : 'hidden')}>
								<p className='text-xs text-muted-foreground truncate'>{user?.email}</p>
							</div>
						</div>
						<ChevronsUpDown className={cn('h-4 w-4 text-muted-foreground', sidebarOpen ? '' : 'hidden')} />
					</button>
				</PopoverTrigger>
				<PopoverContent className='!w-56 mx-auto p-2 space-y-1'>
					{dropdownItems.map((item) => (
						<button
							key={item.label}
							onClick={item.onClick}
							className='w-full flex items-center gap-2 rounded-[6px] px-2 py-1 text-sm hover:bg-muted transition-colors'>
							{item.icon && <item.icon className='size-4' />}
							<span className='text-sm'>{item.label}</span>
						</button>
					))}
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default SidebarFooter;
