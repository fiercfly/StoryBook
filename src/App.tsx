import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { Button } from '@/components/atoms';
import { MetricCard, Sidebar } from '@/components/molecules';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui';

const DashboardContent = () => (
	<div className='max-w-4xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500'>
		<section>
			<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>Dashboard</h1>
			<p className='text-lg text-gray-600 leading-relaxed'>
				Welcome to the FlexPrice Component Library demo. This is the main dashboard view.
			</p>
		</section>

		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
			<MetricCard title='Total Revenue' value={125430} currency='USD' showChangeIndicator />
			<MetricCard title='Active Subscriptions' value={1240} showChangeIndicator />
			<MetricCard title='System Health' value={99.9} isPercent />
		</div>

		<section className='bg-white p-8 border rounded-xl shadow-sm space-y-4'>
			<h2 className='text-2xl font-semibold'>Interactive Demo</h2>
			<p className='text-gray-500 italic'>Try clicking the button below to see the Atoms in action.</p>
			<div className='flex gap-4'>
				<Button onClick={() => alert('Component Library is Live!')}>Explore Atoms</Button>
				<Button variant='outline' onClick={() => (window.location.href = 'http://localhost:6006')}>
					Open Storybook
				</Button>
			</div>
		</section>
	</div>
);

const PlaceholderContent = () => {
	const location = useLocation();
	const title =
		location.pathname
			.split('/')
			.filter(Boolean)
			.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
			.join(' / ') || 'Page';

	return (
		<div className='max-w-4xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500'>
			<section>
				<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>{title}</h1>
				<p className='text-lg text-gray-600 leading-relaxed'>
					This is a placeholder page for the {title} route. In the full application, this would contain the actual feature implementation.
				</p>
			</section>
			<section className='bg-white p-8 border rounded-xl shadow-sm border-dashed text-center space-y-4'>
				<p className='text-muted-foreground'>Component library extracted successfully.</p>
				<Button onClick={() => (window.location.href = 'http://localhost:6006')}>View in Storybook</Button>
			</section>
		</div>
	);
};

const AppContent = () => {
	const location = useLocation();
	const currentPathName = location.pathname.split('/').pop() || 'Dashboard';
	const displayTitle = currentPathName.charAt(0).toUpperCase() + currentPathName.slice(1);

	return (
		<SidebarProvider>
			<Sidebar />
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/50 backdrop-blur-sm sticky top-0 z-10'>
					<SidebarTrigger className='-ml-1' />
					<div className='flex items-center gap-2'>
						<span className='font-semibold text-lg'>{displayTitle === 'Dashboard' ? 'FlexPrice Component Library' : displayTitle}</span>
					</div>
				</header>
				<main className='flex flex-1 flex-col gap-4 p-8 bg-[#fdfdfd] overflow-y-auto'>
					<Routes>
						<Route path='/' element={<DashboardContent />} />
						<Route path='*' element={<PlaceholderContent />} />
					</Routes>
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
};

const App = () => (
	<BrowserRouter>
		<AppContent />
	</BrowserRouter>
);

export default App;
