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
const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT); // Your API Endpoint
const account = new Account(client);
const databases = new Databases(client);

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
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

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await account.create(
        ID.unique(), // userId
        formData.email, // email
        formData.password, // password
        formData.fullName // name (optional)
      );

      const result = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID, // your database ID
      "shop_owners",           // your table ID
      user.$id,                // document ID same as user ID
      {
        ownerId: user.$id,
        email: formData.email,
        name: formData.fullName,
        businessName: formData.businessName,
        registerOn: new Date().toISOString(),
      }
    );
    navigate("/signin");
      console.log(user);
    } catch (e) {
      console.error(e);
    }

    // console.log("Sign up with:", formData);
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
