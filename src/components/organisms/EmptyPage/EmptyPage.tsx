import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/atoms/Button';

interface EmptyStateProps {
	icon?: ReactNode;
	heading?: string;
	description?: string;
	buttonLabel?: string;
	buttonAction?: () => void;
	children?: ReactNode;
	className?: string;
}

const EmptyPage: FC<EmptyStateProps> = ({ icon, heading, description, buttonLabel, buttonAction, children, className }) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center min-h-[400px] w-full p-8 text-center bg-background border border-dashed rounded-lg',
				className,
			)}>
			{icon && <div className='mb-6 text-muted-foreground'>{icon}</div>}

			{heading && <h3 className='mb-2 text-xl font-semibold tracking-tight text-foreground'>{heading}</h3>}

			{description && <p className='max-w-[400px] mb-8 text-sm text-muted-foreground leading-relaxed'>{description}</p>}

			{buttonLabel && buttonAction && (
				<Button onClick={buttonAction} variant='default' size='lg'>
					{buttonLabel}
				</Button>
			)}

			{children && <div className='mt-8 w-full'>{children}</div>}
		</div>
	);
};

export default EmptyPage;
