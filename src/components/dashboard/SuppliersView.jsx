import {
  Users,
  Plus,
  Search,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import useSuppliers from "../../hooks/useSuppliers";
import Addsupplier from "../forms/Addsupplier";
import UpdateSupplier from "../forms/UpdateSupplier";
import Warningcard from "../ui/Warningcard";

const SuppliersView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { suppliers, error, loading } = useSuppliers();
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  console.log("SuppliersView - suppliers:", suppliers);
  console.log("SuppliersView - error:", error);
  console.log("SuppliersView - loading:", loading);

  // Function to handle opening the update modal with supplier data
  const handleEditClick = (supplier) => {
    setSelectedSupplier(supplier);
    setShowUpdateModal(true);
  };

  // Function to handle the update submission
  const handleUpdateSupplier = (updatedSupplier) => {
    // Here you would typically call an API to update the supplier
    // For now, we'll just log it
    console.log("Updating supplier:", updatedSupplier);
    // You can add your update logic here (e.g., call an API endpoint)
  };

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.supplierName
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      supplier.contactName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.contactEmail
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      supplier.products?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log("filteredSuppliers:", filteredSuppliers);

  return (
    <>
      {/* Add Supplier Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl m-4">
            <Addsupplier onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}

      {/* Update Supplier Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl m-4">
            <UpdateSupplier
              onClose={() => {
                setShowUpdateModal(false);
                setSelectedSupplier(null);
              }}
              supplierData={selectedSupplier}
              onUpdate={handleUpdateSupplier}
            />
          </div>
        </div>
      )}

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-gray-500/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg  max-w-2xl m-4">
            <Warningcard onClose={() => setShowWarning(false)} />
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Suppliers</h1>
            <p className="text-gray-600 mt-1">
              Manage your supplier contacts and relationships
            </p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#8458B3] text-white rounded-lg hover:bg-[#a28089] transition-colors shadow-sm"
            onClick={() => setShowModal(true)}
          >
            <Plus className="w-5 h-5" />
            Add Supplier
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <p className="text-gray-600">Loading suppliers...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-[#a28089]/10 border border-[#a28089]/20 rounded-lg p-4">
            <p className="text-[#a28089]">Error: {error}</p>
          </div>
        )}

        {/* Stats */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Suppliers</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {suppliers.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#a0d2eb]/30 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#8458B3]" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Suppliers</p>
                  <p className="text-2xl font-bold text-[#8458B3] mt-1">
                    {suppliers.filter((s) => s.status === "active").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#d0bdf4]/50 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#8458B3]" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Inactive Suppliers</p>
                  <p className="text-2xl font-bold text-gray-600 mt-1">
                    {suppliers.filter((s) => s.status === "inactive").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        {!loading && !error && (
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search suppliers by name, contact, or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8458B3] focus:border-transparent outline-none"
              />
            </div>
          </div>
        )}

        {/* Suppliers List */}
        {!loading && !error && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      Supplier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      Products
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
                  {filteredSuppliers.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        No suppliers found. Try a different search term or add a
                        new supplier.
                      </td>
                    </tr>
                  ) : (
                    filteredSuppliers.map((supplier) => (
                      <tr
                        key={supplier.$id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-[#d0bdf4]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Users className="w-5 h-5 text-[#8458B3]" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                {supplier.supplierName}
                              </p>
                              <p className="text-sm text-gray-500">
                                {supplier.contactName}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span>{supplier.contactEmail}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4" />
                              <span>{supplier.contactPhone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-900">
                            {supplier.products}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              supplier.status === "active"
                                ? "bg-[#d0bdf4]/50 text-[#8458B3]"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {supplier.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEditClick(supplier)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit supplier"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setShowWarning(true)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete supplier"
                            >
                              <Trash2 className="w-4 h-4" />
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
        )}
      </div>
    </>
  );
};

export default SuppliersView;
