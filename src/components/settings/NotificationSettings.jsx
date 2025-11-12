import React, { useState } from "react";
import { Bell, Mail, MessageSquare, Package, AlertCircle } from "lucide-react";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    orderUpdates: true,
    inventoryAlerts: true,
    supplierMessages: true,
    weeklyReports: false,
    monthlyReports: true,
    marketingEmails: false,
  });

  const handleToggle = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSave = () => {
    console.log("Notifications updated:", notifications);
    // Add your save logic here
  };

  const NotificationToggle = ({
    label,
    description,
    value,
    onChange,
    icon: Icon,
  }) => (
    <div className="flex items-start justify-between py-4">
      <div className="flex gap-3">
        {Icon && (
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-emerald-600" />
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          value ? "bg-emerald-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Communication Channels */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Communication Channels
        </h3>
        <div className="divide-y divide-gray-200">
          <NotificationToggle
            icon={Mail}
            label="Email Notifications"
            description="Receive notifications via email"
            value={notifications.emailNotifications}
            onChange={() => handleToggle("emailNotifications")}
          />
          <NotificationToggle
            icon={Bell}
            label="Push Notifications"
            description="Receive push notifications in your browser"
            value={notifications.pushNotifications}
            onChange={() => handleToggle("pushNotifications")}
          />
          <NotificationToggle
            icon={MessageSquare}
            label="SMS Notifications"
            description="Receive text messages for important updates"
            value={notifications.smsNotifications}
            onChange={() => handleToggle("smsNotifications")}
          />
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Activity Notifications */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Activity Notifications
        </h3>
        <div className="divide-y divide-gray-200">
          <NotificationToggle
            icon={Package}
            label="Order Updates"
            description="Get notified about order status changes"
            value={notifications.orderUpdates}
            onChange={() => handleToggle("orderUpdates")}
          />
          <NotificationToggle
            icon={AlertCircle}
            label="Inventory Alerts"
            description="Receive alerts for low stock items"
            value={notifications.inventoryAlerts}
            onChange={() => handleToggle("inventoryAlerts")}
          />
          <NotificationToggle
            icon={MessageSquare}
            label="Supplier Messages"
            description="Get notified when suppliers send messages"
            value={notifications.supplierMessages}
            onChange={() => handleToggle("supplierMessages")}
          />
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Reports & Updates */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Reports & Updates
        </h3>
        <div className="divide-y divide-gray-200">
          <NotificationToggle
            label="Weekly Reports"
            description="Receive weekly summary reports"
            value={notifications.weeklyReports}
            onChange={() => handleToggle("weeklyReports")}
          />
          <NotificationToggle
            label="Monthly Reports"
            description="Receive monthly analytics reports"
            value={notifications.monthlyReports}
            onChange={() => handleToggle("monthlyReports")}
          />
          <NotificationToggle
            label="Marketing Emails"
            description="Receive product updates and tips"
            value={notifications.marketingEmails}
            onChange={() => handleToggle("marketingEmails")}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reset to Default
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
