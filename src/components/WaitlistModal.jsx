import { useState } from "react";
import { X, Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);
const databases = new Databases(client);

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "waitlist_users",
        ID.unique(),
        {
          email: formData.email,
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Error creating document:", error);
      alert("Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ email: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        {submitted ? (
          // Success State
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                You're on the list! 🎉
              </h2>
              <p className="text-gray-600">
                Thanks for joining our waitlist. We'll send you an email at{" "}
                <span className="font-semibold text-emerald-600">
                  {formData.email}
                </span>{" "}
                when we're ready to launch.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-emerald-800">
                💡 Want early access? Share Invently with your friends to move
                up the waitlist!
              </p>
            </div>

            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleClose}
              >
                Done
              </Button>
              <Button
                variant="ghost"
                size="md"
                fullWidth
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ email: "" });
                }}
              >
                Add Another Email
              </Button>
            </div>
          </div>
        ) : (
          // Form State
          <div className="p-8 space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Join the Waitlist
              </h2>
              <p className="text-gray-600">
                Be among the first to experience Invently. Get early access to
                the smartest inventory management system.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                icon={<Mail className="w-5 h-5" />}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-5 h-5" />}
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>

            <p className="text-xs text-center text-gray-500">
              By joining, you agree to receive updates about Invently.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
