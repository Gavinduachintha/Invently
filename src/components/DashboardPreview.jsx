const DashboardPreview = () => {
  return (
    <section className="relative -mt-32 px-6 bg-white overflow-hidden pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Preview Container */}
        <div className="relative pt-8">
          {/* Background Decoration */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

          {/* Dashboard Image Container */}
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 mx-auto max-w-6xl transform hover:scale-[1.02] transition-transform duration-500 animate-fade-in-up">
            {/* Browser Chrome */}
            <div className="bg-gray-100 rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 max-w-md">
                  app.invently.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Screenshot Placeholder */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-xl overflow-hidden">
              {/* You'll replace this with your actual dashboard screenshot */}
              <img
                src="/dashboard-preview.png"
                alt="Invently Dashboard Preview"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="flex items-center justify-center h-96 text-gray-400">
                      <div class="text-center">
                        <svg class="w-24 h-24 mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                        <p class="text-lg font-medium">Dashboard Preview</p>
                        <p class="text-sm mt-2">Add your dashboard screenshot as /public/dashboard-preview.png</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Feature Highlights around the dashboard */}
          <div className="hidden lg:block">
            {/* Left side feature */}
            <div className="absolute left-0 top-1/3 -translate-x-12 bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-xs animate-float">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#8458B3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Real-time Analytics
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Track sales and inventory instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Right side feature */}
            <div
              className="absolute right-0 top-1/2 translate-x-12 bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-xs animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Smart Alerts
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Never run out of stock again
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">10k+</div>
            <div className="text-sm text-gray-600">Products Tracked</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DashboardPreview;
