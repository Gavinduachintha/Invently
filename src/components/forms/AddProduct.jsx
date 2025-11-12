import React, { useState } from "react";
import { X } from "lucide-react";

const AddProduct = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("In Stock");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({
      productName,
      sku,
      category,
      stock,
      price,
      description,
      status,
    });
    onClose(); // Close modal after submission
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Add Product</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          type="button"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="e.g., Rice - 5kg Bag"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SKU
            </label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="e.g., RICE-5KG"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="e.g., Groceries"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Quantity
            </label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="e.g., 45"
              min="0"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="e.g., 15.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            rows="3"
            placeholder="Product description, notes, or additional details..."
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
