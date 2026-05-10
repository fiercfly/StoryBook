import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { cn } from '@/lib/utils';

interface SearchBarProps {
	placeholder?: string;
	onSearch: (value: string) => void;
	debounceTime?: number;
	className?: string;
	isLoading?: boolean;
	defaultValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
	placeholder = 'Search...',
	onSearch,
	debounceTime = 300,
	className,
	isLoading = false,
	defaultValue = '',
}) => {
	const [value, setValue] = useState(defaultValue);
	const [debouncedValue] = useDebounce(value, debounceTime);
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		onSearch(debouncedValue);
	}, [debouncedValue, onSearch]);

	const handleClear = () => {
		setValue('');
		onSearch('');
	};

	return (
		<div className={cn('relative w-full group', className)}>
			<div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors'>
				{isLoading ? <Loader2 className='size-4 animate-spin' /> : <Search className='size-4' />}
			</div>
			<input
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				className={cn(
					'w-full h-10 pl-10 pr-10 bg-background border border-input rounded-[6px] text-sm ring-offset-background transition-all',
					'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:border-transparent',
					'placeholder:text-muted-foreground',
				)}
			/>
			{value && !isLoading && (
				<button
					onClick={handleClear}
					className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
					aria-label='Clear search'>
					<X className='size-4' />
				</button>
			)}
		</div>
	);
};

export default SearchBar;
