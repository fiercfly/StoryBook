import React from 'react';
import Chip from '@/components/atoms/Chip/Chip';
import { CheckCircle2, FileText, XCircle, Clock, AlertCircle, RefreshCcw, Ban } from 'lucide-react';

export type InvoiceStatus = 'draft' | 'paid' | 'void' | 'pending' | 'failed' | 'processing' | 'refunded';

interface InvoiceStatusBadgeProps {
	status: InvoiceStatus | string;
	className?: string;
}

const statusConfig: Record<string, { label: string; variant: any; icon: React.ReactNode }> = {
	paid: {
		label: 'Paid',
		variant: 'success',
		icon: <CheckCircle2 className='size-3' />,
	},
	draft: {
		label: 'Draft',
		variant: 'default',
		icon: <FileText className='size-3' />,
	},
	void: {
		label: 'Void',
		variant: 'failed',
		icon: <Ban className='size-3' />,
	},
	pending: {
		label: 'Pending',
		variant: 'warning',
		icon: <Clock className='size-3' />,
	},
	failed: {
		label: 'Failed',
		variant: 'failed',
		icon: <XCircle className='size-3' />,
	},
	processing: {
		label: 'Processing',
		variant: 'info',
		icon: <RefreshCcw className='size-3 animate-spin-slow' />,
	},
	refunded: {
		label: 'Refunded',
		variant: 'info',
		icon: <RefreshCcw className='size-3' />,
	},
};

const InvoiceStatusBadge: React.FC<InvoiceStatusBadgeProps> = ({ status, className }) => {
	const normalizedStatus = status.toLowerCase();
	const config = statusConfig[normalizedStatus] || {
		label: status,
		variant: 'default',
		icon: <AlertCircle className='size-3' />,
	};

	return <Chip label={config.label} variant={config.variant} icon={config.icon} className={className} />;
};

export default InvoiceStatusBadge;
