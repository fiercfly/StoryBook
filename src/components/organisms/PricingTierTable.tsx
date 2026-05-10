import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/molecules/Table/Table';
import Badge from '@/components/atoms/Chip/Chip';
import { cn } from '@/lib/utils';

interface PricingTier {
	upto: number | 'unlimited';
	unitPrice: number;
	flatFee?: number;
}

interface PricingTierTableProps {
	tiers: PricingTier[];
	currency?: string;
	unit?: string;
	billingPeriod?: string;
	className?: string;
}

const PricingTierTable: React.FC<PricingTierTableProps> = ({
	tiers,
	currency = 'USD',
	unit = 'units',
	billingPeriod = 'month',
	className,
}) => {
	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency,
		}).format(amount);
	};

	return (
		<div className={cn('rounded-lg border border-[#E2E8F0] overflow-hidden', className)}>
			<Table className='w-full'>
				<TableHeader className='bg-muted/50'>
					<TableRow>
						<TableHead className='w-[40%]'>Usage Range</TableHead>
						<TableHead className='text-right'>Unit Price</TableHead>
						<TableHead className='text-right'>Flat Fee</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tiers.map((tier, index) => {
						const prevUpto = index === 0 ? 0 : tiers[index - 1].upto;
						const rangeLabel =
							tier.upto === 'unlimited' ? `${prevUpto === 'unlimited' ? '' : prevUpto}+ ${unit}` : `${prevUpto} - ${tier.upto} ${unit}`;

						return (
							<TableRow key={index}>
								<TableCell className='font-medium'>
									{rangeLabel}
									{tier.upto === 'unlimited' && <Badge label='Catch-all' variant='info' className='ml-2 h-5' />}
								</TableCell>
								<TableCell className='text-right'>{formatCurrency(tier.unitPrice)}</TableCell>
								<TableCell className='text-right text-muted-foreground'>{tier.flatFee ? formatCurrency(tier.flatFee) : '--'}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			<div className='bg-muted/30 p-3 border-t border-[#E2E8F0]'>
				<p className='text-[10px] uppercase tracking-wider text-muted-foreground font-semibold'>Billing Period: {billingPeriod}</p>
			</div>
		</div>
	);
};

export default PricingTierTable;
