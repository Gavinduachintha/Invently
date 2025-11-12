import { Package, AlertTriangle, XCircle, TrendingUp } from "lucide-react";

const StockTable = ({ products, loading }) => {
  // Get stock status for a product
  const getStockStatus = (product) => {
    const quantity = parseInt(product.quantity) || 0;
    const threshold = parseInt(product.lowStockThreshold) || 10;

    if (quantity === 0) {
      return {
        label: "Out of Stock",
        color: "text-red-600",
        bgColor: "bg-red-100",
        icon: XCircle,
      };
    } else if (quantity <= threshold) {
      return {
        label: "Low Stock",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        icon: AlertTriangle,
      };
    } else {
      return {
        label: "In Stock",
        color: "text-green-600",
        bgColor: "bg-green-100",
        icon: TrendingUp,
      };
    }
  };

  // Calculate stock percentage
  const getStockPercentage = (product) => {
    const quantity = parseInt(product.quantity) || 0;
    const threshold = parseInt(product.lowStockThreshold) || 10;
    const maxStock = threshold * 3; // Assuming max stock is 3x the threshold

    const percentage = Math.min((quantity / maxStock) * 100, 100);
    return percentage;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12">
        <div className="text-center">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Stock Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => {
              const status = getStockStatus(product);
              const percentage = getStockPercentage(product);
              const StatusIcon = status.icon;
              const quantity = parseInt(product.quantity) || 0;
              const price = parseFloat(product.price) || 0;
              const totalValue = quantity * price;

              return (
                <tr
                  key={product.$id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Product */}
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          ${price.toFixed(2)} per unit
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* SKU */}
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900 font-mono">
                      {product.sku || "N/A"}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {product.category || "Uncategorized"}
                    </span>
                  </td>

                  {/* Current Stock */}
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {quantity} units
                    </p>
                    <p className="text-xs text-gray-500">
                      Min: {product.lowStockThreshold || 10}
                    </p>
                  </td>

                  {/* Stock Level Bar */}
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          percentage <= 33
                            ? "bg-red-500"
                            : percentage <= 66
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {percentage.toFixed(0)}%
                    </p>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${status.bgColor} ${status.color}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      {status.label}
                    </span>
                  </td>

                  {/* Value */}
                  <td className="px-6 py-4 text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      ${totalValue.toFixed(2)}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
