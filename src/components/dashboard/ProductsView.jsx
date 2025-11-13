import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Plus, Search, Filter, Edit, Trash2, Package } from "lucide-react";
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import AddProduct from "../forms/AddProduct";

const ProductsView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { products, error, loading } = useProducts();
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.productName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate statistics
  const totalProducts = products.length;
  const inStockProducts = products.filter(
    (p) => p.status === "In Stock"
  ).length;
  const lowStockProducts = products.filter(
    (p) => p.status === "Low Stock"
  ).length;

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl m-4">
            <AddProduct onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            <p className="text-gray-600 mt-1">
              Manage your inventory and product catalog
            </p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#8458B3] text-white rounded-lg hover:bg-[#a28089] transition-colors shadow-sm"
            onClick={() => setShowModal(true)}
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {totalProducts}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#a0d2eb]/30 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-[#8458B3]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Stock</p>
                <p className="text-2xl font-bold text-[#8458B3] mt-1">
                  {inStockProducts}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#d0bdf4]/50 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-[#8458B3]" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-[#a28089] mt-1">
                  {lowStockProducts}
                </p>
              </div>
              <div className="w-12 h-12 bg-[#a28089]/20 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-[#a28089]" />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products by name, SKU, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8458B3] focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Products Table */}
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
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-900 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No products found. Try a different search term or add a
                      new product.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr
                      key={product.$id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#d0bdf4]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Package className="w-5 h-5 text-[#8458B3]" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              {product.productName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{product.sku}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">
                          {product.category}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`font-medium ${
                            product.stock === 0
                              ? "text-[#a28089]"
                              : product.stock < 20
                                ? "text-[#a28089]"
                                : "text-gray-900"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">
                          ${parseFloat(product.price).toFixed(2)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            product.status === "In Stock"
                              ? "bg-[#d0bdf4]/50 text-[#8458B3]"
                              : product.status === "Low Stock"
                                ? "bg-[#a28089]/20 text-[#a28089]"
                                : "bg-[#a28089]/30 text-[#a28089]"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-[#a28089]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsView;
