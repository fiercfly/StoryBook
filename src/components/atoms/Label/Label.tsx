import * as React from 'react';
import { cn } from '@/lib/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	label?: string;
	disabled?: boolean;
	labelClassName?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, label, disabled, labelClassName, ...props }, ref) => (
	<label
		ref={ref}
		className={cn(
			'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
			disabled && 'opacity-70 cursor-not-allowed',
			labelClassName,
			className,
		)}
		{...props}>
		{label || props.children}
	</label>
));
Label.displayName = 'Label';

export default Label;
