import { useState, useEffect } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Divider from "../components/ui/Divider";
import SocialLogin from "../components/auth/SocialLogin";
import { Client, Account } from "appwrite";
import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";
import toast, { Toaster } from "react-hot-toast";
import initiateGoogleAuth from "../hooks/useGoogleAuth";
import useOAuthCallback from "../hooks/useOAuthCallback";

const client = new Client()
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

const SignIn = () => {
  const { formData, errors, loading, handleChange, handleSubmit } =
    useSignIn(client);
  const { isChecking } = useOAuthCallback();

  // Show loading while checking OAuth callback
  if (isChecking) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/40 z-50">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="mt-4 text-gray-600">Completing sign in...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your Invently account"
    >
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
                  disabled={loading}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  {loading ? "Signing In..." : "Sign In with Email"}
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

                <SocialLogin onGoogleLogin={initiateGoogleAuth} />
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
      <Toaster />
    </AuthLayout>
  );
};

export default SignIn;
