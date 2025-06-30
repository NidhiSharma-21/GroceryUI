# Sofueled Groceries App

A mobile-first, pixel-perfect online groceries app built with React and React Router DOM. The UI matches the provided Figma design exactly, with reusable components, global state, and smooth navigation.

## Features
- Onboarding, Home, Product Listing/Search, Product Detail, Cart, Checkout, and OrderPlaced screens
- Pixel-perfect, mobile-only UI (max-width 375–414px)
- Global cart and search state via React Context API
- Custom navigation logic (back navigation, onboarding flow)
- Toast notifications (react-hot-toast) for cart actions
- Centralized theming (colors, font sizes, spacing) in `src/theme/theme.ts`
- Scrollable product lists with hidden scrollbars
- Modal overlays above BottomNav
- Responsive, accessible, and maintainable code
- Carousels for banners and products using `react-slick` and `slick-carousel`
- Gilroy font (local) for all typography, with Roboto as fallback

## Tech Stack & Libraries
- **React**
- **React DOM**
- **React Router DOM**
- **React Hot Toast**
- **React Slick** & **Slick Carousel**
- **Tailwind CSS** & **@tailwindcss/vite**
- **Vite** (dev/build tool)

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
   > If you need to install Tailwind CSS, its Vite plugin, or carousel dependencies separately, run:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   npm install react-slick slick-carousel
   ```
2. **Run the app locally:**
   ```bash
   npm run dev
   ```

## Project Structure
- `src/pages/` — Main pages (Onboarding, Home, ProductDetail, Cart, OrderPlaced)
- `src/components/`
  - `common/` — Shared UI components (Button, Modal, Typography, SectionHeader, SearchBar, BottomNav)
  - `cart/` — Cart-related components (CartItem, CheckoutModal, QuantitySelector)
  - `home/` — Home and product listing components (ProductCard, GroceriesCategoryCard, CategoryChip, BannerCarousel)
- `src/context/` — Global state (CartContext)
- `src/theme/` — Centralized theme (colors, font sizes, spacing)
- `src/assets/`
  - `home/`, `cart/`, `onboarding/`, `orderplaced/`, `productdetail/`, `bottomnav/`, `search/` — Images and icons grouped by feature
- `src/fonts/` — Local Gilroy font files (Light, ExtraBold)

## Main Components
- `Button` — Consistent button styles and variants
- `QuantitySelector` — For adjusting product quantities
- `ProductCard` — Product display with add-to-cart
- `CartItem` — Cart item with quantity logic
- `Modal` & `CheckoutModal` — Modal overlays for checkout
- `BottomNav` — Fixed mobile navigation bar
- `BannerCarousel` — Scrollable banner images
- `SectionHeader` — Section titles with "See All"
- `CategoryChip` & `GroceriesCategoryCard` — Category selection
- `Typography` — Consistent text styles
- `SearchBar` — Store search input

## Styling & Theming
- **Gilroy** is the primary font (local, Light and ExtraBold), with Roboto as fallback.
- Font-face is defined in `src/index.css`.
- Some components may use Roboto for certain elements for fallback or style consistency.
- All theme values are centralized in `src/theme/theme.ts`.
- Tailwind CSS is used for utility classes and global styles.

## Carousel
- **react-slick** and **slick-carousel** are used for banners and product carousels.
- Carousels are infinite/autoplay only if enough cards are present.

## Linting

This project uses ESLint with React, React Hooks, and React Refresh plugins for code quality and consistency.

If you see errors about missing ESLint plugins (such as 'globals', 'eslint-plugin-react', 'eslint-plugin-react-hooks', or 'eslint-plugin-react-refresh'), install them with:

```bash
npm install --save-dev globals eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

To check your code for lint errors, run:

```bash
npm run lint
```

This will scan your codebase and report any issues. Fixing these will help keep your project clean and error-free.

## Build
- **Build:** Vite is used for fast dev/build. See `vite.config.js` for config.
- **Tailwind CSS:** Configured in `tailwind.config.js`.

## Configuration
- **Vite:** See `vite.config.js` for plugins and dev server config.
- **Tailwind CSS:** See `tailwind.config.js` for content paths and theme extension.

## Known Limitations & Future Improvements
- No automated tests are included (add unit/integration tests for production)
- No real API integration (product data is hardcoded)
- No accessibility audits (manual checks only)
- No desktop or tablet support (mobile-only)
- No deployment scripts (see Vite docs for deployment)

## See Also
- See `assumptions.md` for design and implementation assumptions.
