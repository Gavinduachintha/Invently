import { useState } from "react";
import { Mail, Lock, User, Building, ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import SocialLogin from "../components/auth/SocialLogin";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Sign up with:", formData);
    // Add your sign-up logic here
  };

  return (
    <AuthLayout
      title="Start Your Free Trial"
      subtitle="Create your Invently account in minutes"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
          icon={<User className="w-5 h-5" />}
        />

        <Input
          label="Business Name"
          type="text"
          name="businessName"
          placeholder="My Shop"
          value={formData.businessName}
          onChange={handleChange}
          error={errors.businessName}
          required
          icon={<Building className="w-5 h-5" />}
        />

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

        <div>
          <Checkbox
            label={
              <span>
                I agree to the{" "}
                <a href="#" className="text-emerald-600 hover:text-emerald-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-emerald-600 hover:text-emerald-700">
                  Privacy Policy
                </a>
              </span>
            }
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          {errors.agreeToTerms && (
            <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          icon={<ArrowRight className="w-5 h-5" />}
        >
          Create Account
        </Button>

        <Divider text="or sign up with" />

        <SocialLogin />

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Sign in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
