import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, ColumnData } from './Table';

interface VirtualizedTableProps<T> {
	columns: ColumnData<T>[];
	data: T[];
	height?: number | string;
	onRowClick?: (row: T) => void;
	className?: string;
}

const VirtualizedTable = <T extends { id?: string | number } | any>({
	columns,
	data,
	height = 400,
	onRowClick,
	className,
}: VirtualizedTableProps<T>) => {
	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: data.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 40, // Estimated row height
		overscan: 10,
	});

	return (
		<div ref={parentRef} className={cn('relative overflow-auto border border-[#E2E8F0] rounded-[6px]', className)} style={{ height }}>
			<Table className='table-fixed'>
				<TableHeader className='sticky top-0 z-10 bg-muted border-b border-[#E2E8F0] shadow-sm'>
					<TableRow>
						{columns.map((column, index) => (
							<TableHead
								key={index}
								width={column.width}
								align={column.align}
								style={{ width: column.width, flex: column.width ? undefined : column.flex || 1 }}
								className='px-3'>
								{column.title}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{rowVirtualizer.getVirtualItems().length > 0 && <tr style={{ height: `${rowVirtualizer.getVirtualItems()[0].start}px` }} />}
					{rowVirtualizer.getVirtualItems().map((virtualRow) => {
						const row = data[virtualRow.index];
						return (
							<TableRow
								key={virtualRow.key}
								onClick={() => onRowClick?.(row)}
								className={cn('transition-colors hover:bg-muted/50 border-b border-[#E2E8F0]', onRowClick && 'cursor-pointer')}
								style={{
									height: `${virtualRow.size}px`,
								}}>
								{columns.map((column, colIndex) => {
									const content = column.render ? column.render(row) : (row as any)[column.fieldName as string];
									return (
										<TableCell
											key={colIndex}
											align={column.align}
											width={column.width}
											className='px-3 truncate'
											style={{ width: column.width }}>
											{content}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
					{rowVirtualizer.getVirtualItems().length > 0 && (
						<tr
							style={{
								height: `${
									rowVirtualizer.getTotalSize() - rowVirtualizer.getVirtualItems()[rowVirtualizer.getVirtualItems().length - 1].end
								}px`,
							}}
						/>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default VirtualizedTable;
