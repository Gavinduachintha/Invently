import React, { useState } from "react";
import { Lock, Key, Shield, Smartphone, AlertTriangle } from "lucide-react";

const SecuritySettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState("30");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password change requested");
    // Add your password change logic here
  };

  const handleEnable2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    console.log("2FA toggled:", !twoFactorEnabled);
  };

  return (
    <div className="space-y-6">
      {/* Change Password */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Change Password
        </h3>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="Enter current password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              placeholder="Confirm new password"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Password requirements:</strong> Minimum 8 characters, at
              least one uppercase letter, one lowercase letter, one number, and
              one special character.
            </p>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Update Password
          </button>
        </form>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Two-Factor Authentication */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Two-Factor Authentication (2FA)
        </h3>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Authenticator App</p>
                <p className="text-sm text-gray-500 mt-1">
                  {twoFactorEnabled
                    ? "Two-factor authentication is enabled"
                    : "Add an extra layer of security to your account"}
                </p>
                {twoFactorEnabled && (
                  <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                    <Shield className="w-3 h-3" />
                    Active
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={handleEnable2FA}
              className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                twoFactorEnabled
                  ? "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              {twoFactorEnabled ? "Disable" : "Enable"}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Session Management */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Session Management
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Session Timeout
            </label>
            <select
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="never">Never</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Automatically log out after this period of inactivity
            </p>
          </div>

          <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors">
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            Log Out All Devices
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Active Sessions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Active Sessions
        </h3>

        <div className="space-y-3">
          {/* Current Session */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Current Session
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Windows • Chrome • 192.168.1.1
                </p>
                <p className="text-xs text-gray-500 mt-1">Active now</p>
              </div>
            </div>
          </div>

          {/* Other Sessions */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-900">Mobile Device</p>
                <p className="text-sm text-gray-600 mt-1">
                  iOS • Safari • 192.168.1.2
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Last active 2 hours ago
                </p>
              </div>
              <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                Revoke
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
