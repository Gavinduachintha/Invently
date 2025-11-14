import { ArrowRight, CheckCircle, Mail } from "lucide-react";
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
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
                Built for Micro Businesses
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Inventory Made
                <span className="text-emerald-600"> Simple</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Manage your stock, track sales, and grow your business with our
                easy-to-use inventory management system designed specifically
                for small retailers.
              </p>
            </div>

            <ul className="space-y-3 inline-block text-left">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isLoading}
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="sm:w-auto"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
              {submitted && (
                <p className="text-sm text-emerald-600 font-medium">
                  ✓ Thanks for joining! We'll notify you when we launch.
                </p>
              )}
            </form>

            <p className="text-sm text-gray-500">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
