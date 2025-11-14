import {
  ArrowRight,
  CheckCircle,
  Mail,
  Package,
  BarChart3,
  Bell,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";
import toast, { Toaster } from "react-hot-toast";
import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
const databases = new Databases(client);

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "waitlist_users",
        ID.unique(),
        {
          email: email,
        }
      );
      setSubmitted(true);
      toast.success("You're on the waitlist! 🎉", {
        position: "top-center",
        duration: 4000,
      });
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to join. Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const features = [
    "Track inventory in real-time",
    "Simple & intuitive interface",
    "Perfect for small businesses",
  ];

  return (
    <section className="relative pt-20 pb-24 px-6 overflow-hidden">
      <div className="min-h-screen w-full bg-[#f9fafb] absolute inset-0">
        {/* Diagonal Fade Center Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating Icons Background */}
      <div
        className="absolute top-10 left-[5%] text-[#8458B3]/10 animate-float z-10"
        style={{ animationDelay: "0s" }}
      >
        <Package className="w-20 h-20" />
      </div>
      <div
        className="absolute top-1/3 right-[8%] text-[#8458B3]/10 animate-float z-10"
        style={{ animationDelay: "2s" }}
      >
        <BarChart3 className="w-24 h-24" />
      </div>
      <div
        className="absolute bottom-1/3 left-[10%] text-[#8458B3]/10 animate-float z-10"
        style={{ animationDelay: "4s" }}
      >
        <Bell className="w-20 h-20" />
      </div>
      <div
        className="absolute top-1/2 right-[5%] text-[#8458B3]/10 animate-float z-10"
        style={{ animationDelay: "3s" }}
      >
        <Smartphone className="w-16 h-16" />
      </div>
      <div
        className="absolute bottom-1/4 right-[15%] text-[#8458B3]/10 animate-float z-10"
        style={{ animationDelay: "1s" }}
      >
        <Package className="w-20 h-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[85vh]">
          <div className="space-y-10 text-center">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300">
                <span className="w-2 h-2 bg-[#8458B3] rounded-full" />
                Built for Small & Growing Businesses
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Inventory Management
                <br />
                <span className="text-[#8458B3]">Made Simple</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                Take control of your stock with our intuitive platform.
                <span className="font-medium text-gray-900">
                  {" "}
                  Track inventory, analyze sales,
                </span>{" "}
                and grow your business—all in one place.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm hover:border-[#8458B3] transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-[#8458B3] flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Waitlist Form */}
            <div className="animate-fade-in-up animation-delay-600">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 max-w-xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3.5 p-2 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <div className="relative flex-1">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl focus:outline-none text-gray-900 placeholder:text-gray-400 text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isLoading}
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="sm:w-auto whitespace-nowrap"
                  >
                    {isLoading ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>

                {submitted && (
                  <div className="animate-fade-in">
                    <p className="text-sm text-green-700 font-semibold flex items-center justify-center gap-2 bg-green-50 border border-green-200 rounded-lg py-3 px-4">
                      <CheckCircle className="w-4 h-4" />
                      Thanks for joining! We'll notify you when we launch.
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Social Proof */}
            <div className="pt-8 animate-fade-in-up animation-delay-800">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by small businesses worldwide
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700 ml-2">
                  Join <span className="text-[#8458B3] font-bold">500+</span>{" "}
                  businesses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" />
    </section>
  );
};

export default Hero;
