import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FilterState {
	filters: Record<string, any>;
	setFilter: (pageKey: string, key: string, value: any) => void;
	resetFilters: (pageKey: string) => void;
	getFilters: (pageKey: string) => any;
}

/**
 * A custom hook for persistent filter management.
 * Stores filters in sessionStorage keyed by page/route.
 * Provides a clean API for setting, resetting, and retrieving filters.
 */
export const useFilterStore = create<FilterState>()(
	persist(
		(set, get) => ({
			filters: {},
			setFilter: (pageKey, key, value) => {
				const currentFilters = get().filters[pageKey] || {};
				const newFilters = { ...currentFilters, [key]: value };

				set((state) => ({
					filters: {
						...state.filters,
						[pageKey]: newFilters,
					},
				}));

				// Sync shallow fingerprint to URL
				syncFingerprintToUrl(pageKey, newFilters);
			},
			resetFilters: (pageKey) => {
				set((state) => {
					const newFilters = { ...state.filters };
					delete newFilters[pageKey];
					return { filters: newFilters };
				});
				syncFingerprintToUrl(pageKey, {});
			},
			getFilters: (pageKey) => get().filters[pageKey] || {},
		}),
		{
			name: 'flexprice-filters',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

/**
 * Syncs a shallow fingerprint (hash) of the filters to the URL query string.
 * This keeps the URL clean while making it unique for the current filter state.
 */
function syncFingerprintToUrl(pageKey: string, filters: any) {
	const filterCount = Object.keys(filters).filter((k) => filters[k] !== undefined && filters[k] !== '').length;
	const url = new URL(window.location.href);

	if (filterCount > 0) {
		// We use a simple hash of the keys or just a count as a fingerprint
		const fingerprint = btoa(JSON.stringify(Object.keys(filters).sort())).substring(0, 8);
		url.searchParams.set(`${pageKey}_fp`, `${filterCount}_${fingerprint}`);
	} else {
		url.searchParams.delete(`${pageKey}_fp`);
	}

	window.history.replaceState({}, '', url.toString());
}
