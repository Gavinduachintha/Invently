import {
  Package,
  BarChart3,
  Bell,
  Smartphone,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Stock Management",
      description:
        "Track every item with ease. Know what's in stock, what's running low, and what needs reordering.",
      color: "blue",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sales Analytics",
      description:
        "Understand your business better with simple, actionable insights and reports.",
      color: "green",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Low Stock Alerts",
      description:
        "Never run out of stock. Get instant notifications when inventory levels are low.",
      color: "orange",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Friendly",
      description:
        "Manage your inventory on the go. Works perfectly on phones, tablets, and desktops.",
      color: "purple",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description:
        "Your data is safe with enterprise-grade security and automatic backups.",
      color: "red",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Built for speed. Update inventory, process sales, and generate reports in seconds.",
      color: "yellow",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    green: "bg-green-50 text-green-600 group-hover:bg-green-100",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
    purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
    red: "bg-red-50 text-red-600 group-hover:bg-red-100",
    yellow: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
  };

  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold">
              ✨ Powerful Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to
            <br />
            <span className="text-[#8458B3]">Manage Inventory</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple yet powerful features designed specifically for small
            businesses and retailers who want to work smarter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#8458B3] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center mb-5 transition-all duration-300 shadow-sm`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8458B3] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to see it in action?</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-[#8458B3] font-semibold hover:text-[#6d3fa0] transition-colors"
          >
            Check out our pricing
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
