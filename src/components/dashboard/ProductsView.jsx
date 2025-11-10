import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Plus, Search, Filter, Edit, Trash2 } from "lucide-react";

const ProductsView = () => {
  const products = [
    {
      id: 1,
      name: "Rice - 5kg Bag",
      sku: "RICE-5KG",
      category: "Groceries",
      stock: 45,
      price: "$15.00",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Cooking Oil - 1L",
      sku: "OIL-1L",
      category: "Cooking",
      stock: 8,
      price: "$12.50",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Sugar - 2kg",
      sku: "SUG-2KG",
      category: "Groceries",
      stock: 0,
      price: "$10.00",
      status: "Out of Stock",
    },
    {
      id: 4,
      name: "Milk Powder - 400g",
      sku: "MILK-400G",
      category: "Dairy",
      stock: 28,
      price: "$14.00",
      status: "In Stock",
    },
    {
      id: 5,
      name: "Laundry Soap",
      sku: "SOAP-LS",
      category: "Cleaning",
      stock: 5,
      price: "$8.50",
      status: "Low Stock",
    },
    {
      id: 6,
      name: "Toothpaste",
      sku: "TP-REG",
      category: "Personal Care",
      stock: 22,
      price: "$3.50",
      status: "In Stock",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:w-auto">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2.5">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none text-sm text-gray-700 w-full"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="secondary" icon={<Filter className="w-4 h-4" />}>
            Filter
          </Button>
          <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
            Add Product
          </Button>
        </div>
      </div>

      {/* Products Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Product
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  SKU
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Stock
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{product.sku}</td>
                  <td className="py-4 px-4 text-gray-700">
                    {product.category}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`font-medium ${
                        product.stock === 0
                          ? "text-red-600"
                          : product.stock < 20
                            ? "text-orange-600"
                            : "text-gray-900"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-900">
                    {product.price}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Low Stock"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProductsView;
