import { Check } from "lucide-react";
import Button from "./ui/Button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for trying out Invently",
      features: [
        "Up to 50 products",
        "Basic reports",
        "Email support",
        "Mobile access",
        "1 user account",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Business",
      price: "5",
      description: "Best for growing businesses",
      features: [
        "500 products",
        "Advanced analytics",
        "Priority support",
        "Mobile access",
        "Up to 5 users",
        "Low stock alerts",
        "Export reports",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "10",
      description: "For larger operations",
      features: [
        "Everything in Business",
        "Unlimited products",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom training",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-semibold">
              💰 Simple Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Plans That
            <span className="text-[#8458B3]"> Grow </span>
            With You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All plans include a
            14-day free trial—no credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#8458B3] shadow-xl scale-105 md:scale-110"
                  : "border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#8458B3] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[3rem]">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 text-lg">/month</span>
                </div>
                {plan.price === "0" && (
                  <p className="text-sm text-gray-600 font-medium mt-2">
                    Forever free
                  </p>
                )}
              </div>

              <Button
                variant={plan.popular ? "primary" : "secondary"}
                fullWidth
                size="lg"
                className={plan.popular ? "" : ""}
              >
                {plan.cta}
              </Button>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900 mb-4">
                  What's included:
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#8458B3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">
            Need a custom plan for your enterprise?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#8458B3] font-semibold hover:text-[#6d3fa0] transition-colors"
          >
            Contact our sales team
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
