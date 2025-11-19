import { useState } from "react";
import { Account } from "appwrite";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useSignIn = (client) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const account = new Account(client);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
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
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        navigate("/dashboard", { state: { user } });
      }, 500);
            toast.success("Welcome back, " + user.name + "!");

    } catch (error) {
      console.log(error.message);
      toast.error("Sign in failed: " + error.message);
      if (error.code === 401) {
        setErrors({ general: "Invalid email or password" });
      } else {
        setErrors({ general: "An error occurred. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useSignIn;
