import { useState, useMemo } from "react";
import { Download, RefreshCw, BarChart3 } from "lucide-react";
import useStock from "../../hooks/useStock";
import StockStats from "./stock/StockStats";
import StockFilters from "./stock/StockFilters";
import StockTable from "./stock/StockTable";
import TotalStockValueCard from "./stock/TotalStockValueCard";
import TotalStockAmount from "./stock/TotalStockAmount";

const StockCheckView = () => {
  const { products, error, loading, stockStats, getProductsByStatus } =
    useStock();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter products based on search and status
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by status
    if (statusFilter !== "all") {
      filtered = getProductsByStatus[statusFilter] || [];
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name?.toLowerCase().includes(query) ||
          product.sku?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, searchQuery, statusFilter, getProductsByStatus]);

  // Export stock data to CSV
  const handleExportCSV = () => {
    const headers = [
      "Product Name",
      "SKU",
      "Category",
      "Quantity",
      "Price",
      "Total Value",
      "Status",
    ];
    const csvData = filteredProducts.map((product) => {
      const quantity = parseInt(product.quantity) || 0;
      const price = parseFloat(product.price) || 0;
      const threshold = parseInt(product.lowStockThreshold) || 10;

      let status = "In Stock";
      if (quantity === 0) status = "Out of Stock";
      else if (quantity <= threshold) status = "Low Stock";

      return [
        product.name,
        product.sku || "N/A",
        product.category || "Uncategorized",
        quantity,
        price.toFixed(2),
        (quantity * price).toFixed(2),
        status,
      ].join(",");
    });

    const csv = [headers.join(","), ...csvData].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `stock-report-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Refresh data
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Stock Check</h1>
          <p className="text-gray-600 mt-1">
            Monitor your inventory levels and stock status
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button
            onClick={handleExportCSV}
            disabled={filteredProducts.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-[#8458B3] text-white rounded-lg hover:bg-[#a28089] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-red-600" />
            <p className="text-red-800 font-medium">Error loading stock data</p>
          </div>
          <p className="text-red-700 text-sm mt-1">{error}</p>
        </div>
      )}

      {/* Total Stock Cards */}
      {!error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TotalStockValueCard
            totalValue={stockStats.totalValue}
            totalProducts={stockStats.totalProducts}
            loading={loading}
          />
          <TotalStockAmount
            totalQuantity={stockStats.totalQuantity}
            totalProducts={stockStats.totalProducts}
            loading={loading}
          />
        </div>
      )}

      {/* Stats Cards */}
      <StockStats stats={stockStats} loading={loading} />

      {/* Filters */}
      {!loading && !error && (
        <StockFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      )}

      {/* Results Count */}
      {!loading && !error && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold">{filteredProducts.length}</span> of{" "}
            <span className="font-semibold">{products.length}</span> products
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-sm text-[#8458B3] hover:text-[#a28089] font-medium"
            >
              Clear search
            </button>
          )}
        </div>
      )}

      {/* Stock Table */}
      <StockTable products={filteredProducts} loading={loading} />
    </div>
  );
};

export default StockCheckView;
