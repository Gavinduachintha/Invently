# Product Management Module - Documentation

## Overview

This document describes the modular product management system implemented in the Invently dashboard. The structure follows the same pattern as the supplier management system for consistency and maintainability.

## File Structure

```
src/
├── hooks/
│   └── useProducts.js              # Custom hook for fetching products from Appwrite
├── components/
│   ├── forms/
│   │   └── AddProduct.jsx          # Modal form for adding new products
│   └── dashboard/
│       └── ProductsView.jsx        # Main products view component
```

## Components

### 1. useProducts Hook (`src/hooks/useProducts.js`)

A custom React hook that manages product data fetching from Appwrite database.

**Features:**

- Fetches products from Appwrite "products" collection
- Manages loading, error, and data states
- Auto-fetches on component mount

**Returns:**

- `products`: Array of product documents
- `error`: Error message (if any)
- `loading`: Boolean loading state

**Usage:**

```javascript
import useProducts from "../../hooks/useProducts";

const { products, error, loading } = useProducts();
```

### 2. AddProduct Component (`src/components/forms/AddProduct.jsx`)

A modal form component for adding new products to the inventory.

**Features:**

- Responsive modal design
- Form validation
- Fields: Product Name, SKU, Category, Stock Quantity, Price, Status, Description
- Status options: In Stock, Low Stock, Out of Stock
- Close modal on cancel or successful submission

**Props:**

- `onClose`: Function to close the modal

**Usage:**

```javascript
import AddProduct from "../forms/AddProduct";

{
  showModal && (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl m-4">
        <AddProduct onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}
```

### 3. ProductsView Component (`src/components/dashboard/ProductsView.jsx`)

Main component that displays and manages the products list.

**Features:**

- Product statistics cards (Total Products, In Stock, Low Stock)
- Search functionality (by name, SKU, or category)
- Data table with sorting and filtering
- Add Product button that opens modal
- Edit and Delete actions for each product
- Status badges with color coding
- Responsive design

**Key Sections:**

1. **Header**: Title, description, and "Add Product" button
2. **Statistics**: Three stat cards showing product overview
3. **Search Bar**: Real-time product filtering
4. **Products Table**: Displays all products with actions

## Database Schema (Appwrite)

The products collection should have the following attributes:

```javascript
{
  productName: String,    // Product name
  sku: String,           // Stock Keeping Unit
  category: String,      // Product category
  stock: Number,         // Current stock quantity
  price: Number,         // Product price
  status: String,        // "In Stock", "Low Stock", or "Out of Stock"
  description: String    // Optional product description
}
```

## Integration with Dashboard

The ProductsView is integrated into the main Dashboard component:

```javascript
// In Dashboard.jsx
case "products":
  return <ProductsView />;
```

## Styling

- Uses Tailwind CSS for all styling
- Follows the same design patterns as the supplier section
- Emerald color scheme for primary actions
- Responsive design for mobile, tablet, and desktop

## Future Enhancements

1. **Edit Functionality**: Add edit modal to modify existing products
2. **Delete Confirmation**: Add warning modal before deleting products
3. **Bulk Actions**: Select multiple products for bulk operations
4. **Export Data**: Export products to CSV/Excel
5. **Product Images**: Add image upload functionality
6. **Barcode Generation**: Generate barcodes for products
7. **Categories Management**: Separate category management system
8. **Stock Alerts**: Notifications for low stock items
9. **Price History**: Track price changes over time
10. **Supplier Link**: Connect products to suppliers

## Maintenance Tips

1. **Adding New Fields**: Update all three files (hook, form, view)
2. **Changing Styles**: Maintain consistency with supplier section
3. **Database Changes**: Update Appwrite collection attributes
4. **Testing**: Test with different data volumes
5. **Error Handling**: Add comprehensive error messages

## Similar Components

This module follows the same structure as:

- Supplier Management (`SuppliersView.jsx`, `Addsupplier.jsx`, `useSuppliers.js`)

This consistency makes the codebase easier to:

- Understand
- Maintain
- Extend
- Debug

## Code Quality

- Modular structure for easy testing
- Reusable components
- Consistent naming conventions
- Clean separation of concerns
- DRY principles applied
