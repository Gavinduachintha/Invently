import { Package } from "lucide-react";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e5eaf5] via-white to-[#d0bdf4]/20 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 bg-[#8458B3] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8458B3]/20">
              <Package className="w-8 h-8 text-white" />
            </div>
            <span className="text-4xl font-bold text-gray-900">Invently</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          © 2025 Invently. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
