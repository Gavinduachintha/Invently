# Stock Check Module Documentation

## Overview
The Stock Check module provides comprehensive inventory monitoring for micro businesses. It allows users to view stock levels, identify low/out-of-stock items, and export reports.

## Module Structure

### 📁 File Organization
```
src/
├── hooks/
│   └── useStock.js                    # Custom hook for stock data & calculations
├── components/
│   └── dashboard/
│       ├── StockCheckView.jsx         # Main container component
│       └── stock/
│           ├── StockStats.jsx         # Statistics cards component
│           ├── StockFilters.jsx       # Search & filter controls
│           └── StockTable.jsx         # Stock data table
```

## Components

### 1. **StockCheckView** (Main Component)
**File:** `src/components/dashboard/StockCheckView.jsx`

**Purpose:** Container component that orchestrates the entire stock check page.

**Features:**
- Search and filter functionality
- CSV export capability
- Refresh data
- Result count display
- Error handling

**State:**
- `searchQuery`: Current search text
- `statusFilter`: Active status filter (all, inStock, lowStock, outOfStock)

---

### 2. **StockStats**
**File:** `src/components/dashboard/stock/StockStats.jsx`

**Purpose:** Displays key inventory statistics in card format.

**Cards:**
1. Total Products
2. In Stock (green)
3. Low Stock (yellow)
4. Out of Stock (red)
5. Total Inventory Value
6. Low Stock Value

**Props:**
- `stats`: Object containing calculated statistics
- `loading`: Boolean for loading state

---

### 3. **StockFilters**
**File:** `src/components/dashboard/stock/StockFilters.jsx`

**Purpose:** Search bar and status filter chips.

**Features:**
- Full-text search (name, SKU, category)
- Status filter chips with visual indicators
- Active filter highlighting

**Props:**
- `searchQuery`: Current search value
- `setSearchQuery`: Function to update search
- `statusFilter`: Current filter value
- `setStatusFilter`: Function to update filter

---

### 4. **StockTable**
**File:** `src/components/dashboard/stock/StockTable.jsx`

**Purpose:** Displays products in a detailed table format.

**Columns:**
1. Product (with icon and price)
2. SKU
3. Category
4. Current Stock (with minimum threshold)
5. Stock Level (visual progress bar)
6. Status (with icon badge)
7. Total Value

**Features:**
- Color-coded status indicators
- Progress bars for stock levels
- Hover effects
- Empty state handling

**Props:**
- `products`: Array of filtered products
- `loading`: Boolean for loading state

---

### 5. **useStock Hook**
**File:** `src/hooks/useStock.js`

**Purpose:** Fetches products and calculates stock statistics.

**Returns:**
- `products`: Array of all products
- `error`: Error message if any
- `loading`: Loading state
- `stockStats`: Calculated statistics object
- `getProductsByStatus`: Object with categorized products

**Statistics Calculated:**
- Total products count
- Low stock count
- Out of stock count
- In stock count
- Total inventory value
- Low stock value

**Stock Categorization Logic:**
- **Out of Stock:** quantity = 0
- **Low Stock:** 0 < quantity ≤ lowStockThreshold
- **In Stock:** quantity > lowStockThreshold

---

## Data Flow

```
useStock Hook
    ↓
Fetches products from Appwrite
    ↓
Calculates statistics & categorizes products
    ↓
StockCheckView (Main Component)
    ↓
├── StockStats (displays statistics)
├── StockFilters (search & filter)
└── StockTable (displays filtered products)
```

## Key Features

### 1. **Real-time Stock Monitoring**
- Visual indicators for stock status
- Progress bars showing stock levels
- Color-coded alerts (red, yellow, green)

### 2. **Search & Filter**
- Search by product name, SKU, or category
- Filter by stock status (all, in stock, low stock, out of stock)
- Real-time filtering

### 3. **Export Functionality**
- Export filtered data to CSV
- Includes all relevant product information
- Filename includes current date

### 4. **Responsive Design**
- Mobile-friendly layout
- Horizontal scrolling for table on small screens
- Adaptive card grid

### 5. **Performance Optimizations**
- `useMemo` for expensive calculations
- Efficient filtering
- Conditional rendering

## Usage

### Navigation
Click "Stock Check" in the dashboard sidebar to access the page.

### Filtering Products
1. Use the search bar to find specific products
2. Click filter chips to view products by status
3. Combine search and filters for precise results

### Exporting Data
1. Apply desired filters
2. Click "Export CSV" button
3. CSV file downloads with current date in filename

### Understanding Stock Status
- **Green (In Stock):** Sufficient inventory
- **Yellow (Low Stock):** Below threshold, reorder recommended
- **Red (Out of Stock):** No inventory available

## Customization Guide

### Changing Stock Thresholds
Modify the calculation logic in `useStock.js`:
```javascript
const lowStockThreshold = parseInt(product.lowStockThreshold) || 10;
```

### Adding New Filters
1. Add filter option in `StockFilters.jsx`
2. Update filtering logic in `StockCheckView.jsx`

### Modifying Statistics
Add new calculations in `useStock.js` `stockStats` memo:
```javascript
stats.customMetric = // your calculation
```

### Styling Changes
All components use Tailwind CSS. Modify classes directly in component files.

## Integration with Appwrite

### Database Structure Expected
**Collection:** `products`

**Required Fields:**
- `name`: Product name
- `sku`: Stock keeping unit
- `category`: Product category
- `quantity`: Current stock quantity
- `price`: Unit price
- `lowStockThreshold`: Minimum stock level

### Environment Variables
```
VITE_APPWRITE_PROJECT_ID
VITE_APPWRITE_ENDPOINT
VITE_APPWRITE_DATABASE_ID
```

## Future Enhancements

### Potential Features
1. **Stock Alerts:** Email notifications for low stock
2. **Stock History:** Track quantity changes over time
3. **Reorder Suggestions:** Automatic purchase order generation
4. **Batch Actions:** Update multiple products at once
5. **Stock Adjustments:** Quick add/remove stock interface
6. **Charts:** Visual analytics (pie charts, line graphs)
7. **Print Reports:** PDF generation
8. **Barcode Scanning:** Quick stock updates via scanner

### Performance Improvements
1. Implement pagination for large inventories
2. Add server-side filtering
3. Cache frequently accessed data
4. Lazy load table rows

## Troubleshooting

### Products Not Displaying
1. Check Appwrite connection
2. Verify database ID and collection name
3. Check browser console for errors
4. Ensure products collection has data

### Incorrect Statistics
1. Verify `lowStockThreshold` field exists on products
2. Check data types (quantity should be number)
3. Review calculation logic in `useStock.js`

### Export Not Working
1. Check browser permissions for downloads
2. Verify filtered products array is not empty
3. Check for CSV formatting issues

## Maintenance Tips

### Code Organization
- Keep components focused on single responsibility
- Use props for data passing
- Avoid prop drilling with context if needed

### Testing Checklist
- [ ] Search functionality works
- [ ] All filters display correct results
- [ ] Statistics calculate correctly
- [ ] Export generates valid CSV
- [ ] Responsive on mobile devices
- [ ] Loading states display properly
- [ ] Error states handle gracefully

### Performance Monitoring
- Monitor render times with React DevTools
- Check for unnecessary re-renders
- Optimize useMemo dependencies
- Profile on large datasets (1000+ products)

---

## Support
For questions or issues with the Stock Check module, refer to the main project documentation or contact the development team.
