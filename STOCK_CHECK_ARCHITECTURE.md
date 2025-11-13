# Stock Check Module - Visual Architecture

## Component Hierarchy

```
StockCheckView (Main Container)
│
├── Header Section
│   ├── Title & Description
│   └── Action Buttons
│       ├── Refresh Button
│       └── Export CSV Button
│
├── Error Display (conditional)
│
├── StockStats Component
│   ├── Total Products Card
│   ├── In Stock Card (Green)
│   ├── Low Stock Card (Yellow)
│   ├── Out of Stock Card (Red)
│   ├── Total Inventory Value Card
│   └── Low Stock Value Card
│
├── StockFilters Component
│   ├── Search Bar
│   └── Status Filter Chips
│       ├── All Products
│       ├── In Stock
│       ├── Low Stock
│       └── Out of Stock
│
├── Results Counter
│
└── StockTable Component
    └── Product Table
        ├── Product Column (with icon)
        ├── SKU Column
        ├── Category Column
        ├── Current Stock Column
        ├── Stock Level Column (progress bar)
        ├── Status Column (badge)
        └── Value Column
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────┐
│                  useStock Hook                      │
│                                                     │
│  1. Fetches products from Appwrite Database        │
│  2. Calculates statistics (totals, values)         │
│  3. Categorizes products by status                 │
│  4. Returns data and calculations                  │
└──────────────────┬──────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────┐
│              StockCheckView                         │
│                                                     │
│  • Receives: products, stats, status categories    │
│  • Manages: search query, status filter            │
│  • Filters: products based on search & status      │
│  • Handles: CSV export, refresh                    │
└──────────────────┬──────────────────────────────────┘
                   │
         ┌─────────┼─────────┐
         │         │         │
         ↓         ↓         ↓
    ┌────────┐ ┌──────────┐ ┌──────────┐
    │ Stats  │ │ Filters  │ │  Table   │
    │ Cards  │ │ Controls │ │ Display  │
    └────────┘ └──────────┘ └──────────┘
```

## State Management

```
┌─────────────────────────────────────────┐
│         Component State                 │
├─────────────────────────────────────────┤
│                                         │
│  useStock Hook (Global Data)            │
│  ├── products: []                       │
│  ├── loading: boolean                   │
│  ├── error: string | null               │
│  ├── stockStats: {}                     │
│  └── getProductsByStatus: {}            │
│                                         │
│  StockCheckView (Local State)           │
│  ├── searchQuery: ""                    │
│  └── statusFilter: "all"                │
│                                         │
│  Derived State (Computed)               │
│  └── filteredProducts                   │
│      (based on search + filter)         │
└─────────────────────────────────────────┘
```

## User Interaction Flow

```
User Opens Stock Check Page
         ↓
    Loading State
         ↓
   Data Fetched
         ↓
Statistics Calculated & Displayed
         ↓
┌────────────────────────────────┐
│  User Can:                     │
│                                │
│  1. View Stats Cards           │
│     └→ See inventory overview  │
│                                │
│  2. Search Products            │
│     └→ Type in search bar      │
│     └→ Results filter instantly│
│                                │
│  3. Filter by Status           │
│     └→ Click filter chip       │
│     └→ View specific category  │
│                                │
│  4. View Table                 │
│     └→ See detailed stock info │
│     └→ Color-coded status      │
│                                │
│  5. Export Data                │
│     └→ Click Export CSV        │
│     └→ Download filtered data  │
│                                │
│  6. Refresh                    │
│     └→ Reload latest data      │
└────────────────────────────────┘
```

## Stock Status Logic

```
For each product:

    Get: quantity, lowStockThreshold

    IF quantity = 0
        Status: OUT OF STOCK 🔴
        Card: Red badge
        Icon: XCircle

    ELSE IF quantity ≤ lowStockThreshold
        Status: LOW STOCK 🟡
        Card: Yellow badge
        Icon: AlertTriangle

    ELSE
        Status: IN STOCK 🟢
        Card: Green badge
        Icon: TrendingUp
```

## Statistics Calculations

```
stockStats = {

    totalProducts: products.length

    inStock: products where quantity > threshold

    lowStock: products where 0 < quantity ≤ threshold

    outOfStock: products where quantity = 0

    totalValue: Σ(quantity × price) for all products

    lowStockValue: Σ(quantity × price) for low stock items
}
```

## Filter & Search Logic

```
Input: products[], searchQuery, statusFilter

Step 1: Filter by Status
    IF statusFilter = "all"
        → Use all products
    ELSE
        → Use getProductsByStatus[statusFilter]

Step 2: Filter by Search
    IF searchQuery is not empty
        → Filter where:
           • name includes query OR
           • sku includes query OR
           • category includes query

Output: filteredProducts[]
```

## Progress Bar Calculation

```
For each product in table:

    maxStock = lowStockThreshold × 3

    percentage = (quantity / maxStock) × 100

    Cap at 100%

    Color:
        0-33%:  RED
        34-66%: YELLOW
        67-100%: GREEN
```

## CSV Export Structure

```
Headers:
    Product Name, SKU, Category, Quantity, Price, Total Value, Status

For each product:
    Row = [
        product.name,
        product.sku || "N/A",
        product.category || "Uncategorized",
        product.quantity,
        product.price.toFixed(2),
        (quantity × price).toFixed(2),
        stock_status
    ]

Output: CSV file named "stock-report-YYYY-MM-DD.csv"
```

## Performance Optimizations

```
1. useMemo for stockStats
   └→ Only recalculates when products change

2. useMemo for getProductsByStatus
   └→ Categorizes products once per data load

3. useMemo for filteredProducts
   └→ Only refilters when search/filter/products change

4. Conditional rendering
   └→ Don't render table during loading

5. Efficient array methods
   └→ Single pass filtering where possible
```

## Error Handling

```
Try:
    Fetch products from Appwrite

Catch Error:
    1. Log error to console
    2. Set error state
    3. Display error message to user
    4. Show error banner in UI

Finally:
    Set loading = false
```

## Responsive Design Breakpoints

```
Mobile (< 640px):
    • Stats: 1 column
    • Search: Full width
    • Table: Horizontal scroll
    • Filters: Stacked

Tablet (640px - 1024px):
    • Stats: 2 columns
    • Search: Full width
    • Table: Horizontal scroll
    • Filters: Wrapped

Desktop (> 1024px):
    • Stats: 3 columns
    • Search: Full width
    • Table: Full view
    • Filters: Single row
```

---

This visual guide helps understand how all the pieces work together!
