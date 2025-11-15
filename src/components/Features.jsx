import { Package, BarChart3, Bell, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Real-time Inventory",
      description:
        "Track stock levels instantly. Know exactly what you have, what's running low, and what to reorder.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analytics",
      description:
        "Make data-driven decisions with actionable insights into your sales, trends, and performance.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Instant Alerts",
      description:
        "Stay ahead with automatic notifications for low stock, restocking needs, and sales milestones.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Built for speed. Update inventory, record sales, and generate reports in seconds, not minutes.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to run your inventory
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed for small businesses who want to focus on
            growth, not spreadsheets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="w-12 h-12 bg-[#8458B3] bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-opacity-100 transition-all duration-300">
                <div className="text-[#8458B3] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
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
