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
      const user = await account.get();
      console.log("User data:", user);
      console.log("Login in as: ",user);
      localStorage.setItem("user", JSON.stringify(user));
      
      setTimeout(() => {
        navigate("/dashboard",{state: { user }});
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
      <form onSubmit={handleSubmit}>
        {/* Split Layout Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Input Fields */}
          <div className="space-y-6 md:border-r md:border-gray-200 md:pr-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Account Details
              </h3>

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
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Checkbox
                label="Remember me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <a
                href="#"
                className="text-sm text-[#8458B3] hover:text-[#a28089] font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex flex-col justify-center space-y-6 md:pl-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Sign In Method
              </h3>

              <div className="space-y-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Sign In with Email
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <SocialLogin />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Sign Up Link */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#8458B3] hover:text-[#a28089] font-semibold transition-colors"
            >
              Create a free account
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
