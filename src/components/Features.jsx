import {
  Package,
  BarChart3,
  Bell,
  Smartphone,
  Shield,
  Zap,
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
    blue: "bg-[#a0d2eb]/30 text-[#8458B3]",
    green: "bg-[#d0bdf4]/30 text-[#8458B3]",
    orange: "bg-[#e5eaf5] text-[#a28089]",
    purple: "bg-[#d0bdf4] text-[#8458B3]",
    red: "bg-[#a28089]/20 text-[#a28089]",
    yellow: "bg-[#a0d2eb]/20 text-[#8458B3]",
  };

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Inventory
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, powerful features designed specifically for small businesses
            and retailers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg ${colorClasses[feature.color]} flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
