# Setting Up Products Collection in Appwrite

## Quick Setup Guide

### Step 1: Create Products Collection

1. Go to your Appwrite console
2. Navigate to your database
3. Click "Add Collection"
4. Name it: **products**
5. Click "Create"

### Step 2: Add Attributes

Add the following attributes to your products collection:

| Attribute Name | Type    | Size | Required | Default    |
| -------------- | ------- | ---- | -------- | ---------- |
| productName    | String  | 255  | Yes      | -          |
| sku            | String  | 100  | Yes      | -          |
| category       | String  | 100  | Yes      | -          |
| stock          | Integer | -    | Yes      | 0          |
| price          | Float   | -    | Yes      | 0.00       |
| status         | String  | 50   | Yes      | "In Stock" |
| description    | String  | 1000 | No       | -          |

### Step 3: Set Permissions

Set the following permissions for the collection:

**For Development:**

- Read: Any
- Create: Any
- Update: Any
- Delete: Any

**For Production:**

- Read: Role: users
- Create: Role: users
- Update: Role: users
- Delete: Role: users

### Step 4: Add Index (Optional but Recommended)

For better search performance, add indexes on:

- `productName` (ascending)
- `sku` (ascending)
- `category` (ascending)

### Step 5: Test Data (Optional)

Add some sample products for testing:

```javascript
[
  {
    productName: "Rice - 5kg Bag",
    sku: "RICE-5KG",
    category: "Groceries",
    stock: 45,
    price: 15.0,
    status: "In Stock",
    description: "Premium quality rice",
  },
  {
    productName: "Cooking Oil - 1L",
    sku: "OIL-1L",
    category: "Cooking",
    stock: 8,
    price: 12.5,
    status: "Low Stock",
    description: "Vegetable cooking oil",
  },
  {
    productName: "Sugar - 2kg",
    sku: "SUG-2KG",
    category: "Groceries",
    stock: 0,
    price: 10.0,
    status: "Out of Stock",
    description: "White refined sugar",
  },
];
```

### Step 6: Verify Connection

Make sure your `.env` file has the correct Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=your_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
```

### Troubleshooting

**Issue: Products not loading**

- Check Appwrite console for collection name (must be "products")
- Verify permissions are set correctly
- Check browser console for errors
- Verify environment variables are loaded

**Issue: Add Product not saving**

- Implement the save functionality in AddProduct.jsx
- Connect to Appwrite Database API
- Add proper error handling

**Next Steps:**

- Implement create product functionality
- Add edit product functionality
- Add delete product functionality
- Add loading states and error messages
