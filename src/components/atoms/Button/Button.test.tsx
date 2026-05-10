import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
	it('should render children correctly', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByRole('button')).toHaveTextContent('Click Me');
	});

	it('should call onClick when clicked', () => {
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Click Me</Button>);
		fireEvent.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('should be disabled when disabled prop is true', () => {
		render(<Button disabled>Disabled</Button>);
		expect(screen.getByRole('button')).toBeDisabled();
	});

	it('should show loader when isLoading is true', () => {
		render(<Button isLoading>Loading</Button>);
		expect(screen.getByRole('button')).toBeDisabled();
		// Lucide loader icon usually has animate-spin class
		expect(screen.getByRole('button').querySelector('.animate-spin')).toBeInTheDocument();
	});

	it('should render prefix icon', () => {
		render(<Button prefixIcon={<span data-testid='prefix'>$</span>}>Pay</Button>);
		expect(screen.getByTestId('prefix')).toBeInTheDocument();
	});
});
