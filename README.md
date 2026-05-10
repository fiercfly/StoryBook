# FlexPrice Component Library

This repository contains the frontend component library extracted from the FlexPrice application. The goal of this project was to isolate the presentation layer, remove all backend dependencies, and create a stateless, reusable UI system documented via Storybook.

## Architecture & Approach

The component library follows an Atomic Design methodology to ensure consistency and reusability across the application.

*   **Atoms:** Foundational UI elements (Buttons, Inputs, Badges, Spinners).
*   **Molecules:** Composite elements combining atoms (DataTables, MetricCards, SearchBars, Sidebars).
*   **Organisms:** Complex, standalone UI sections (PricingTierTables, EmptyStates).

All backend logic, routing complexity, database integrations, and authentication flows were deliberately stripped out to provide a pure frontend environment powered entirely by mock data.

## Advanced Implementations

The project implements several advanced architectural requirements:

*   **Filter Persistence:** Implemented a robust global state solution using Zustand (`useFilterStore`) to ensure filter parameters persist seamlessly across route changes and application reloads.
*   **Virtualized Lists:** Re-architected the standard table component into a `VirtualizedTable` using `@tanstack/react-virtual`. This allows the application to render massive datasets (10,000+ rows) with high performance by only rendering items currently visible in the DOM viewport.
*   **Query Configuration:** Standardized data fetching constraints by implementing a global `createQueryConfig` utility, establishing uniform cache invalidation boundaries (`staleTime`) across the entire component library.

## Getting Started

### Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the local Vite dashboard (Port 3000):
    ```bash
    npm run dev
    ```

3.  Run the interactive Storybook environment (Port 6006):
    ```bash
    npm run storybook
    ```

### Testing

The library includes comprehensive unit tests and component interaction tests.

```bash
npm run test
```

## Deployment

This component library is configured for immediate deployment on Vercel. 

To deploy the static Storybook documentation:
*   **Build Command:** `npm run build-storybook`
*   **Output Directory:** `storybook-static`
