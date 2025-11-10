import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Inventory?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join hundreds of small businesses already saving time and money with
            Invently. Start your free trial today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="white"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => navigate("/signup")}
            >
              Start Your Free Trial
            </Button>
            <button
              className="text-white hover:text-blue-100 transition-colors font-medium underline"
              onClick={() => navigate("/waitlist")}
            >
              Join Waitlist
            </button>
          </div>
          <p className="text-emerald-50 text-sm mt-6">
            ✓ 14-day free trial ✓ No credit card needed ✓ Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
