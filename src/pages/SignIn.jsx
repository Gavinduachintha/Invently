import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import SocialLogin from "../components/auth/SocialLogin";
import { Client, Account } from "appwrite";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT); // Your API Endpoint
const account = new Account(client);

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await account.createEmailPasswordSession(
        formData.email,
        formData.password
      );
      console.log("Login successful:", result);
      toast.success("Signed in successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      console.log(error.message);
      if (error.code === 401) {
        setErrors({ general: "Invalid email or password" });
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your Invently account"
    >
      <toast />
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Split Layout Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Inputs */}
          <div className="space-y-5">
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              icon={<Mail className="w-5 h-5" />}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              icon={<Lock className="w-5 h-5" />}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <a
                href="#"
                className="text-sm text-[#8458B3] hover:text-[#a28089] font-medium"
              >
                Forgot?
              </a>
            </div>
          </div>

          {/* Right Side - Buttons */}
          <div className="flex flex-col justify-center space-y-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Sign In
            </Button>

            <Divider text="or" />

            <SocialLogin />
          </div>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-[#8458B3] hover:text-[#a28089] font-medium"
          >
            Sign up for free
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
