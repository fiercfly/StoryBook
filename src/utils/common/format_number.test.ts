import { describe, it, expect } from 'vitest';
import formatNumber, { formatCompactNumber } from './format_number';

describe('formatNumber', () => {
	it('should format number with default decimals (0)', () => {
		expect(formatNumber(1000)).toBe('1,000');
	});

	it('should format number with specific decimals', () => {
		expect(formatNumber(1000.567, 2)).toBe('1,000.57');
	});

	it('should return "-" for falsy values', () => {
		expect(formatNumber(0)).toBe('-');
	});
});

describe('formatCompactNumber', () => {
	it('should format thousands as k', () => {
		expect(formatCompactNumber(1500)).toBe('1.5k');
	});

	it('should format millions as M', () => {
		expect(formatCompactNumber(2000000)).toBe('2M');
	});

	it('should format billions as B', () => {
		expect(formatCompactNumber(5000000000)).toBe('5B');
	});

	it('should return local string for small numbers', () => {
		expect(formatCompactNumber(123)).toBe('123');
	});
});
