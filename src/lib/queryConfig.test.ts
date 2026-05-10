import { describe, it, expect } from 'vitest';
import { createQueryConfig, QUERY_PRESETS } from './queryConfig';

describe('createQueryConfig', () => {
	it('should return default configuration when no arguments are provided', () => {
		const config = createQueryConfig();
		expect(config.staleTime).toBe(QUERY_PRESETS.DEFAULT.staleTime);
		expect(config.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
	});

	it('should return REALTIME configuration when specified', () => {
		const config = createQueryConfig('REALTIME');
		expect(config.staleTime).toBe(QUERY_PRESETS.REALTIME.staleTime);
		expect(config.gcTime).toBe(QUERY_PRESETS.REALTIME.gcTime);
	});

	it('should return STATIC configuration when specified', () => {
		const config = createQueryConfig('STATIC');
		expect(config.staleTime).toBe(QUERY_PRESETS.STATIC.staleTime);
		expect(config.gcTime).toBe(QUERY_PRESETS.STATIC.gcTime);
	});

	it('should allow overriding specific values', () => {
		const config = createQueryConfig('DEFAULT', { staleTime: 0 });
		expect(config.staleTime).toBe(0);
		expect(config.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
	});

	it('should allow overriding both values', () => {
		const config = createQueryConfig('STATIC', { staleTime: 100, gcTime: 200 });
		expect(config.staleTime).toBe(100);
		expect(config.gcTime).toBe(200);
	});
});
