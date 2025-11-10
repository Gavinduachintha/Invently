# Invently - Dashboard Documentation

## 📁 Complete Project Structure

```
src/
├── pages/                     # All page components
│   ├── LandingPage.jsx       # Main landing page
│   ├── SignIn.jsx            # Sign in page
│   ├── SignUp.jsx            # Sign up page
│   └── Dashboard.jsx         # Main dashboard page
│
├── components/
│   ├── dashboard/            # Dashboard-specific components
│   │   ├── Sidebar.jsx       # Collapsible sidebar with menu
│   │   ├── Header.jsx        # Dashboard header with search & profile
│   │   ├── DashboardHome.jsx # Dashboard home view (overview)
│   │   └── ProductsView.jsx  # Products management view
│   │
│   ├── auth/                 # Authentication components
│   │   ├── AuthLayout.jsx
│   │   └── SocialLogin.jsx
│   │
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.jsx        # Button component
│   │   ├── Input.jsx         # Input field component
│   │   ├── Checkbox.jsx      # Checkbox component
│   │   ├── Divider.jsx       # Divider component
│   │   ├── Card.jsx          # Card container component
│   │   └── StatCard.jsx      # Statistics card component
│   │
│   ├── Navbar.jsx            # Landing page navbar
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Pricing.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
│
├── hooks/                    # Custom React hooks
│   ├── useToggle.js         # Toggle state hook
│   └── useSidebar.js        # Sidebar state hook
│
├── lib/
│   └── appwrite.js
│
├── App.jsx                  # Main app with routing
├── App.css
└── main.jsx
```

## 🎯 Dashboard Features

### 🔧 Sidebar Component

**Features:**

- ✅ Collapsible/Expandable (Desktop)
- ✅ Hamburger menu (Mobile)
- ✅ Smooth transitions
- ✅ Active page highlighting
- ✅ Logo section
- ✅ Logout button
- ✅ Responsive overlay on mobile

**Menu Items:**

- Dashboard (Home)
- Products
- Orders
- Analytics
- Customers
- Settings

**States:**

- Expanded: 256px (w-64)
- Collapsed: 80px (w-20)
- Mobile: Overlay with full menu

### 📊 Dashboard Home View

**Includes:**

1. **4 Stat Cards:**

   - Total Products (with growth %)
   - Total Orders (with growth %)
   - Revenue (with growth %)
   - Low Stock Alert (with decrease %)

2. **Recent Orders Table:**

   - Customer name
   - Product
   - Status badges
   - Amount

3. **Low Stock Alert:**

   - Product names
   - Units left
   - Status indicators (Critical/Low)

4. **Sales Overview Chart:**
   - Placeholder for chart integration

### 📦 Products View

**Features:**

- Search bar
- Filter button
- Add Product button
- Full products table with:
  - Product image placeholder
  - SKU
  - Category
  - Stock levels (color-coded)
  - Price
  - Status badges
  - Edit/Delete actions

### 🎨 UI Components

#### StatCard

- Icon with colored background
- Title and value
- Growth percentage indicator
- Color variants: emerald, teal, blue, orange, red, purple

#### Card

- Title and subtitle support
- Optional action button in header
- Padded content area
- Clean border and shadow

#### Header

- Responsive search bar
- Notification bell with badge
- User profile dropdown
- Welcome message

## 🚀 Routes

```javascript
/ - Landing Page
/signin - Sign In Page
/signup - Sign Up Page
/dashboard - Dashboard (Main)
```

## 📱 Responsive Design

### Desktop (≥ 1024px)

- Full sidebar with labels
- Toggle button visible
- All features displayed

### Tablet (768px - 1023px)

- Collapsed sidebar by default
- All functionality intact

### Mobile (< 768px)

- Hamburger menu
- Overlay sidebar
- Stacked layouts
- Touch-friendly buttons

## 🎨 Color Theme

Consistent emerald-teal theme across all pages:

- **Primary**: `emerald-600` (#059669)
- **Secondary**: `teal-600` (#0d9488)
- **Success**: `green-600`
- **Warning**: `orange-600`
- **Danger**: `red-600`
- **Info**: `blue-600`

## 🔄 Navigation Flow

```
Landing Page → Sign Up/Sign In → Dashboard
                                    ├─ Dashboard Home
                                    ├─ Products
                                    ├─ Orders
                                    ├─ Analytics
                                    ├─ Customers
                                    └─ Settings
```

## 💡 Usage

### Accessing the Dashboard

Navigate to: `http://localhost:5173/dashboard`

### Sidebar Navigation

- **Desktop**: Click the chevron button to collapse/expand
- **Mobile**: Click hamburger menu to open/close
- Click any menu item to navigate between views

### Current Views

✅ Dashboard Home - Fully functional
✅ Products - Fully functional
🚧 Orders - Placeholder
🚧 Analytics - Placeholder
🚧 Customers - Placeholder
🚧 Settings - Placeholder

## 🛠️ Extending the Dashboard

### Adding a New View

1. **Create the view component:**

```javascript
// src/components/dashboard/OrdersView.jsx
const OrdersView = () => {
  return <div>Your orders content</div>;
};
export default OrdersView;
```

2. **Import in Dashboard.jsx:**

```javascript
import OrdersView from "../components/dashboard/OrdersView";
```

3. **Add to renderView switch:**

```javascript
case 'orders':
  return <OrdersView />;
```

### Adding a New Sidebar Menu Item

Edit `src/components/dashboard/Sidebar.jsx`:

```javascript
const menuItems = [
  // ... existing items
  { id: "newpage", label: "New Page", icon: IconComponent },
];
```

## 📦 Key Dependencies

- React 19
- React Router DOM v6
- Lucide React (icons)
- Tailwind CSS 4

## 🎯 Best Practices

1. **Component Separation**: Each view is a separate component
2. **Reusable UI**: Use Card, StatCard, Button, etc.
3. **Consistent Styling**: Follow Tailwind conventions
4. **Responsive First**: Mobile-friendly by default
5. **Clean Code**: Well-organized file structure

## 🔜 Future Enhancements

- [ ] Add charts library (Chart.js, Recharts)
- [ ] Implement data fetching
- [ ] Add loading states
- [ ] Create modals for add/edit
- [ ] Add pagination to tables
- [ ] Implement filters
- [ ] Add export functionality
- [ ] Real-time updates
- [ ] Dark mode toggle
- [ ] User preferences
