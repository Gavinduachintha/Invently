import { useState } from "react";
import { Mail, Lock, User, Building, ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import SocialLogin from "../components/auth/SocialLogin";
import { Client, Account, ID, Databases, Permission, Role } from "appwrite";
import { useNavigate } from "react-router-dom";
import initiateGoogleAuth from "../hooks/useGoogleAuth";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT); // Your API Endpoint
const account = new Account(client);
const databases = new Databases(client);

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

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

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const user = await account.create(
        ID.unique(), // userId
        formData.email, // email
        formData.password, // password
        "" // name (optional)
      );

      const result = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID, // your database ID
        "shop_owners", // your table ID
        user.$id, // document ID same as user ID
        {
          ownerId: user.$id,
          email: formData.email,
          name: "",
          businessName: "",
          registerOn: new Date().toISOString(),
        }
      );
      navigate("/signin");
      console.log(user);
    } catch (e) {
      console.error(e);
      setErrors({ general: "Failed to create account. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout >
      <form onSubmit={handleSubmit}>
        {/* Split Layout Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Input Fields */}
          <div className="space-y-6 md:border-r md:border-gray-200 md:pr-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Create Account
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
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  required
                  icon={<Lock className="w-5 h-5" />}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  required
                  icon={<Lock className="w-5 h-5" />}
                />
              </div>
            </div>

            <div className="pt-2">
              <Checkbox
                label={
                  <span className="text-sm">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#8458B3] hover:text-[#a28089] font-medium"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#8458B3] hover:text-[#a28089] font-medium"
                    >
                      Privacy Policy
                    </a>
                  </span>
                }
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-[#a28089]">
                  {errors.agreeToTerms}
                </p>
              )}
            </div>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex flex-col justify-center space-y-6 md:pl-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Sign Up Method
              </h3>

              <div className="space-y-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={loading}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <SocialLogin onGoogleLogin={initiateGoogleAuth} />
              </div>
            </div>

            {errors.general && (
              <div className="bg-[#a28089]/10 border border-[#a28089]/20 rounded-lg p-3">
                <p className="text-sm text-[#a28089]">{errors.general}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Sign In Link */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-[#8458B3] hover:text-[#a28089] font-semibold transition-colors"
            >
              Sign in to your account
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
