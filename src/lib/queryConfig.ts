/**
 * Caching presets for TanStack Query to ensure consistent behavior.
 */
export const QUERY_PRESETS = {
	REALTIME: {
		staleTime: 0,
		gcTime: 5 * 60 * 1000, // 5 minutes
	},
	DEFAULT: {
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000, // 10 minutes
	},
	STATIC: {
		staleTime: 30 * 60 * 1000, // 30 minutes
		gcTime: 60 * 60 * 1000, // 1 hour
	},
} as const;

export type QueryPreset = keyof typeof QUERY_PRESETS;

/**
 * Utility to create a query configuration with optional overrides.
 * @param preset - The predefined preset to use.
 * @param overrides - Optional overrides for staleTime and gcTime.
 */
export const createQueryConfig = (preset: QueryPreset = 'DEFAULT', overrides?: { staleTime?: number; gcTime?: number }) => {
	const baseConfig = QUERY_PRESETS[preset];
	return {
		...baseConfig,
		...overrides,
	};
};

/**
 * Global default options for QueryClient based on our standard DEFAULT preset.
 */
export const globalQueryDefaultOptions = {
	queries: {
		...QUERY_PRESETS.DEFAULT,
		refetchOnWindowFocus: false,
		retry: 1,
	},
};
