// ============================================
// EXAMPLE: Simple Popup Update Form Pattern
// ============================================

import React, { useState, useEffect } from "react";

// ========== 1. THE UPDATE FORM COMPONENT ==========
const UpdateForm = ({ data, onClose, onSave }) => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // ✨ Magic happens here: Pre-fill form when data changes
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setEmail(data.email || "");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...data, name, email });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

// ========== 2. THE MAIN VIEW COMPONENT ==========
const MainView = () => {
  const [items] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  // State to control modal and store selected item
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Handler for edit button click
  const handleEditClick = (item) => {
    setSelectedItem(item); // 📦 Store the item data
    setShowUpdateModal(true); // 👁️ Show the modal
  };

  // Handler for saving updates
  const handleSave = (updatedItem) => {
    console.log("Saving:", updatedItem);
    // Here you would call your API to update the database
  };

  return (
    <div>
      {/* ========== THE UPDATE MODAL ========== */}
      {showUpdateModal && (
        <div className="modal-overlay">
          <UpdateForm
            data={selectedItem} // Pass the selected item's data
            onClose={() => {
              setShowUpdateModal(false);
              setSelectedItem(null);
            }}
            onSave={handleSave}
          />
        </div>
      )}

      {/* ========== THE ITEMS LIST ========== */}
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {/* 🎯 Edit button that triggers the modal */}
                <button onClick={() => handleEditClick(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainView;

// ============================================
// HOW IT WORKS - STEP BY STEP:
// ============================================
/*
1. User clicks "Edit" button on an item
   ↓
2. handleEditClick(item) runs with that item's data
   ↓
3. setSelectedItem(item) stores the data in state
   ↓
4. setShowUpdateModal(true) shows the modal
   ↓
5. Modal renders with selectedItem as the 'data' prop
   ↓
6. useEffect in UpdateForm runs and pre-fills all fields
   ↓
7. User sees form with existing data already filled in ✨
   ↓
8. User modifies the data and clicks "Update"
   ↓
9. handleSave runs with the updated data
   ↓
10. Your API call would go here to update the database
   ↓
11. Modal closes and selectedItem is reset to null
*/

// ============================================
// KEY POINTS TO REMEMBER:
// ============================================
/*
✅ Store selected item in state before opening modal
✅ Pass the stored data to the form component
✅ Use useEffect to populate form fields when data changes
✅ Clear selected item when modal closes
✅ The form component doesn't need to know about the list - it just receives data
*/
