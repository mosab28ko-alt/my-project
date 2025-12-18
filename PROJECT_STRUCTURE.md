# Project Structure

```
my-project/
├── eslint.config.js
├── vite.config.js
├── package.json
├── index.html
├── README.md
├── LANDING_PAGE_README.md
│
├── public/
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── App.css
│   │
│   ├── api/
│   │   ├── checkout.js
│   │   ├── help-center.js
│   │   ├── pricing.js
│   │   └── user.js
│   │
│   ├── assets/
│   │
│   ├── added/
│   │   └── photo/
│   │
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── WrapperLayout.jsx
│   │   ├── checkout/
│   │   ├── help/
│   │   ├── pricing/
│   │   ├── home/
│   │   │   ├── index.js
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── PricingPlans.jsx
│   │   │   ├── CustomerReviews.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   └── OurTeam.jsx
│   │   ├── landing/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   └── CTASection.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Sidebar.css
│   │   │   ├── Footer.jsx
│   │   │   ├── HeaderData.jsx
│   │   │   ├── HeaderItem.jsx
│   │   │   └── SidebarData.jsx
│   │   ├── dashbardLayot/
│   │   │   ├── header/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── HeaderLayout.jsx
│   │   │   │   ├── HeaderItem.jsx
│   │   │   │   └── HeaderData.jsx
│   │   │   └── sidebar/
│   │   │       ├── index.jsx
│   │   │       ├── SidebarLayout.jsx
│   │   │       ├── SidebarItem.jsx
│   │   │       ├── SidebarData.jsx
│   │   │       └── Sidebar.css
│   │   ├── content/
│   │   │   ├── index.jsx
│   │   │   ├── ContentLayout.jsx
│   │   │   ├── ContentItem.jsx
│   │   │   └── ContentData.jsx
│   │   ├── end/
│   │   │   ├── index.jsx
│   │   │   ├── beginning/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Item.jsx
│   │   │   │   └── Data.jsx
│   │   │   ├── conc/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── Item.jsx
│   │   │   │   └── Data.jsx
│   │   │   └── second/
│   │   ├── conclusion/
│   │   │   ├── index.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Item.jsx
│   │   │   └── Data.jsx
│   │   ├── third/
│   │   │   ├── index.jsx
│   │   │   ├── nextone/
│   │   │   ├── second/
│   │   │   └── three/
│   │   ├── vegetable/
│   │   │   ├── index.jsx
│   │   │   ├── VegetableLayout.jsx
│   │   │   ├── VegetableItem.jsx
│   │   │   └── VegetableData.jsx
│   │   └── ui/
│   │       ├── Spinner.jsx
│   │       └── LoadingScreen.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── CheckoutContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   └── useCheckout.js
│   │
│   ├── layouts/
│   │   ├── LandingLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── CheckoutLayout.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   ├── dashboard/
│   │   │   ├── Overview.jsx
│   │   │   ├── Billing.jsx
│   │   │   └── Settings.jsx
│   │   └── front/
│   │       ├── Landing.jsx
│   │       ├── Pricing.jsx
│   │       ├── GeneralPayment.jsx
│   │       ├── checkout/
│   │       └── help-center/
│   │
│   ├── routes/
│   │   ├── DashboardRoutes.jsx
│   │   ├── FrontRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── data/
│   │   ├── homeData.js
│   │   └── landingData.js
│   │
│   └── utils/
│       ├── constants.js
│       ├── helpers.js
│       └── validators.js
│
└── .git/
```

## Project Overview

**Type**: React + Vite Application

**Main Sections**:
- 🏠 **Landing**: Marketing landing page
- 🏪 **Front**: Public-facing pages (Pricing, Help Center, Checkout)
- 🔐 **Auth**: Login, Register, Forgot Password
- 📊 **Dashboard**: User dashboard (Overview, Billing, Settings)

**Core Structure**:
- `components/` - Reusable React components
- `pages/` - Page-level components
- `layouts/` - Layout wrappers
- `context/` - State management (Auth, Cart, Checkout)
- `hooks/` - Custom React hooks
- `api/` - API integration functions
- `utils/` - Helper functions, constants, validators
- `data/` - Static data files
- `routes/` - Route definitions
