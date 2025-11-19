import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

/**
 * Reusable Supplier Form Modal Component
 * Can be used for both adding and updating suppliers
 *
 * @param {Object} props
 * @param {Function} props.onClose - Function to close the modal
 * @param {Object} props.supplierData - Existing supplier data (null for add mode)
 * @param {Function} props.onSubmit - Function to handle form submission
 * @param {string} props.mode - 'add' or 'update' mode
 */
const SupplierFormModal = ({
  onClose,
  supplierData = null,
  onSubmit,
  mode = "add",
}) => {
  const [formData, setFormData] = useState({
    supplierName: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    products: "",
    status: "active",
  });

  // Pre-fill the form with existing data when in update mode
  useEffect(() => {
    if (supplierData && mode === "update") {
      setFormData({
        supplierName: supplierData.supplierName || "",
        contactName: supplierData.contactName || "",
        contactPhone: supplierData.contactPhone || "",
        contactEmail: supplierData.contactEmail || "",
        products: supplierData.products || "",
        status: supplierData.status || "active",
      });
    }
  }, [supplierData, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the form data along with original supplier ID if updating
    const dataToSubmit =
      mode === "update" ? { ...supplierData, ...formData } : formData;

    onSubmit(dataToSubmit);
    onClose();
  };

  const isUpdateMode = mode === "update";

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          {isUpdateMode ? "Update Supplier" : "Add Supplier"}
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          type="button"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Supplier Name
          </label>
          <input
            type="text"
            name="supplierName"
            value={formData.supplierName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Person
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Products
          </label>
          <textarea
            name="products"
            value={formData.products}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            rows="3"
            placeholder="List of products supplied..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
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
            className="px-4 py-2 bg-[#8458B3] text-white rounded-lg hover:bg-[#a28089] transition-colors"
          >
            {isUpdateMode ? "Update Supplier" : "Add Supplier"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierFormModal;
