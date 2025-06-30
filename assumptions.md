# Assumptions & Design Decisions

## UI/UX
- The app is strictly mobile-first and locked to a max-width of 375–414px.
- All layouts, spacing, and typography match the provided Figma design as closely as possible.
- Scrollbars are hidden for horizontal/vertical product lists for a clean look.
- The BottomNav is always visible and overlays modals correctly.
- All images and icons are local assets in `src/assets/`.

## Navigation
- React Router DOM is used for navigation between screens.
- Custom back navigation logic:
  - From Home, back navigates to Onboarding.
  - From Product Detail, back navigates to Home.
  - After OrderPlaced, navigating to Home and then back takes the user to Onboarding.
- Onboarding clears the cart and resets state.

## State Management
- Cart and search state are managed globally via React Context API (`CartContext`).
- Cart is persisted in `sessionStorage` for the session.
- No Redux or external state management is used.

## Theming & Styling
- All colors, font sizes, and spacing are centralized in `src/theme/theme.ts`.
- Tailwind CSS is used for utility classes and global styles (see `tailwind.config.js`).
- Font family is Gilroy (local, with Roboto as fallback).
- Global styles and font-face are set in `src/index.css`.

## Libraries Used
- `react`, `react-dom`, `react-router-dom` — core React and routing
- `react-hot-toast` — toast notifications
- `react-slick`, `slick-carousel` — carousels and sliders
- `tailwindcss`, `@tailwindcss/vite` — utility-first CSS
- `vite` — dev/build tool
- `eslint` — linting

## Carousel
- `react-slick` and `slick-carousel` are used for banner and product carousels.
- Carousels are only infinite/autoplay if enough cards are present.

## Data & API
- Product and category data are hardcoded in the UI for demo purposes.
- No real backend/API integration is present.
- `axios` is not used in the current app.

## Accessibility
- All interactive elements are keyboard accessible.
- Modals close on overlay click or Escape key.

## Component Structure
- All UI is built from reusable, atomic components in `src/components/`.
- Each page in `src/pages/` composes these components for layout and logic.
- All components are functional and use hooks.

## Linting & Build
- ESLint is configured for React, hooks, and refresh (see `eslint.config.js`).
- Vite is used for dev/build (see `vite.config.js`).
- Tailwind CSS is configured in `tailwind.config.js`.

## Fonts
- Gilroy (local, Light and ExtraBold) is the primary font, with Roboto as fallback.
- Font-face is defined in `src/index.css`.

## Miscellaneous
- All spelling, weights, and product names are corrected .
- Toast notifications appear at the top-right for cart actions.
- No automated tests or deployment scripts are included. 
