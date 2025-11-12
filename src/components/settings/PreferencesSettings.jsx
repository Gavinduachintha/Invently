import React, { useState } from "react";
import {
  Palette,
  Globe,
  Clock,
  Calendar,
  DollarSign,
  Package,
} from "lucide-react";

const PreferencesSettings = () => {
  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "en",
    timezone: "UTC",
    dateFormat: "MM/DD/YYYY",
    currency: "USD",
    startPage: "dashboard",
  });

  const handleChange = (key, value) => {
    setPreferences({ ...preferences, [key]: value });
  };

  const handleSave = () => {
    console.log("Preferences saved:", preferences);
    // Add your save logic here
  };

  const PreferenceOption = ({ icon: Icon, label, description, children }) => (
    <div className="py-4">
      <div className="flex gap-3 mb-3">
        {Icon && (
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-emerald-600" />
          </div>
        )}
        <div className="flex-1">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Appearance */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
        <div className="divide-y divide-gray-200">
          <PreferenceOption
            icon={Palette}
            label="Theme"
            description="Choose your preferred color scheme"
          >
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleChange("theme", "light")}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  preferences.theme === "light"
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="w-full h-12 bg-white border border-gray-300 rounded mb-2"></div>
                <p className="text-sm font-medium text-gray-900">Light</p>
              </button>

              <button
                onClick={() => handleChange("theme", "dark")}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  preferences.theme === "dark"
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="w-full h-12 bg-gray-800 border border-gray-700 rounded mb-2"></div>
                <p className="text-sm font-medium text-gray-900">Dark</p>
              </button>

              <button
                onClick={() => handleChange("theme", "auto")}
                className={`p-4 border-2 rounded-lg transition-colors ${
                  preferences.theme === "auto"
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="w-full h-12 bg-gradient-to-r from-white to-gray-800 border border-gray-300 rounded mb-2"></div>
                <p className="text-sm font-medium text-gray-900">Auto</p>
              </button>
            </div>
          </PreferenceOption>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Regional Settings */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Regional Settings
        </h3>
        <div className="divide-y divide-gray-200">
          <PreferenceOption
            icon={Globe}
            label="Language"
            description="Select your preferred language"
          >
            <select
              value={preferences.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
            </select>
          </PreferenceOption>

          <PreferenceOption
            icon={Clock}
            label="Timezone"
            description="Set your local timezone"
          >
            <select
              value={preferences.timezone}
              onChange={(e) => handleChange("timezone", e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="UTC">UTC (GMT+0:00)</option>
              <option value="EST">Eastern Time (GMT-5:00)</option>
              <option value="PST">Pacific Time (GMT-8:00)</option>
              <option value="CST">Central Time (GMT-6:00)</option>
              <option value="JST">Japan (GMT+9:00)</option>
              <option value="IST">India (GMT+5:30)</option>
            </select>
          </PreferenceOption>

          <PreferenceOption
            icon={Calendar}
            label="Date Format"
            description="Choose how dates are displayed"
          >
            <select
              value={preferences.dateFormat}
              onChange={(e) => handleChange("dateFormat", e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              <option value="DD MMM YYYY">DD MMM YYYY</option>
            </select>
          </PreferenceOption>

          <PreferenceOption
            icon={DollarSign}
            label="Currency"
            description="Set your preferred currency"
          >
            <select
              value={preferences.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="CAD">CAD - Canadian Dollar</option>
            </select>
          </PreferenceOption>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Default Settings */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Default Settings
        </h3>
        <div className="divide-y divide-gray-200">
          <PreferenceOption
            icon={Package}
            label="Start Page"
            description="Choose which page loads when you sign in"
          >
            <select
              value={preferences.startPage}
              onChange={(e) => handleChange("startPage", e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="dashboard">Dashboard</option>
              <option value="products">Products</option>
              <option value="suppliers">Suppliers</option>
              <option value="orders">Orders</option>
              <option value="analytics">Analytics</option>
            </select>
          </PreferenceOption>
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

export default PreferencesSettings;
