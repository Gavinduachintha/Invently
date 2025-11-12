import { Search, Filter } from "lucide-react";

const StockFilters = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) => {
  const filterOptions = [
    { value: "all", label: "All Products", count: null },
    { value: "inStock", label: "In Stock", badge: "green" },
    { value: "lowStock", label: "Low Stock", badge: "yellow" },
    { value: "outOfStock", label: "Out of Stock", badge: "red" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by product name, SKU, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Status Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filter by status:</span>
        </div>
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setStatusFilter(option.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              statusFilter === option.value
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {option.label}
            {option.badge && statusFilter === option.value && (
              <span
                className={`ml-2 w-2 h-2 rounded-full inline-block ${
                  option.badge === "green"
                    ? "bg-green-400"
                    : option.badge === "yellow"
                    ? "bg-yellow-400"
                    : "bg-red-400"
                }`}
              ></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockFilters;
