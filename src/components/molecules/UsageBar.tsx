import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface UsageBarProps {
	label: string;
	used: number;
	entitlement: number;
	unit?: string;
	className?: string;
	showPercentage?: boolean;
}

const UsageBar: React.FC<UsageBarProps> = ({ label, used, entitlement, unit = 'units', className, showPercentage = true }) => {
	const percentage = Math.min(Math.round((used / entitlement) * 100), 100);
	const isOverLimit = used > entitlement;

	const indicatorClass = isOverLimit ? 'bg-destructive' : percentage > 80 ? 'bg-orange-500' : 'bg-primary';

	return (
		<div className={cn('space-y-2', className)}>
			<div className='flex justify-between items-end'>
				<div className='space-y-0.5'>
					<p className='text-sm font-medium text-foreground'>{label}</p>
					<p className='text-xs text-muted-foreground'>
						{used.toLocaleString()} / {entitlement.toLocaleString()} {unit}
					</p>
				</div>
				{showPercentage && (
					<span className={cn('text-xs font-semibold', isOverLimit ? 'text-destructive' : 'text-muted-foreground')}>{percentage}%</span>
				)}
			</div>
			<Progress value={percentage} indicatorClassName={indicatorClass} className='h-2' />
			{isOverLimit && <p className='text-[10px] text-destructive font-medium uppercase tracking-wider'>Over entitlement limit</p>}
		</div>
	);
};

export default UsageBar;
