import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Building,
} from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Client, Databases, ID, Permission, Role } from "appwrite";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT); // Your API Endpoint
const databases = new Databases(client);

const Waitlist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const result = await databases.createDocument(
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
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
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
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
              <Button
                variant="ghost"
                size="md"
                fullWidth
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: "", email: "", businessName: "" });
                }}
              >
                Add Another Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className=" bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="font-bold text-gray-900 text-xl">Invently</span>
            </div>
            <Button variant="primary" size="sm" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Be among the first to experience Invently. Get early access to the
              smartest inventory management system for your business.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
              >
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
