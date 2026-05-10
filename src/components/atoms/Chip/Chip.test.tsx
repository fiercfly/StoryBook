import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Chip from './Chip';

describe('Chip Component', () => {
	it('should render label correctly', () => {
		render(<Chip label='Active' />);
		expect(screen.getByText('Active')).toBeInTheDocument();
	});

	it('should call onClick when clicked', () => {
		const onClick = vi.fn();
		render(<Chip label='Clickable' onClick={onClick} />);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('should not call onClick when disabled', () => {
		const onClick = vi.fn();
		render(<Chip label='Disabled' onClick={onClick} disabled />);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).not.toHaveBeenCalled();
	});

	it('should render icon when provided', () => {
		render(<Chip label='Info' icon={<span data-testid='icon'>i</span>} />);
		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});

	it('should apply custom background color', () => {
		const { container } = render(<Chip label='Custom' bgColor='#ff0000' />);
		const span = container.querySelector('span');
		expect(span).toHaveStyle({ backgroundColor: '#ff0000' });
	});
});
