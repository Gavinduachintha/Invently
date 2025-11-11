import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";
import toast, { Toaster } from "react-hot-toast";
import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
const databases = new Databases(client);

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-white focus:border-white outline-none transition-all text-white placeholder:text-white/60"
                />
              </div>
              <Button
                type="submit"
                variant="white"
                size="lg"
                disabled={isLoading}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>

          <p className="text-emerald-50 text-sm mt-6">
            ✓ No credit card needed ✓ Setup in minutes
          </p>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default CTA;
