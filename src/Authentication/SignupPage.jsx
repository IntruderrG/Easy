import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import authService from "../api/auth";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordValidations(validations);
    return Object.values(validations).every((v) => v);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password does not meet requirements";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else if (new Date(formData.dob) >= new Date()) {
      newErrors.dob = "Date of birth must be in the past";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { confirmPassword, ...userData } = formData;
      await authService.signup({
        ...userData,
        dob: new Date(userData.dob).toISOString(), // FIXED: added ()
      });
      navigate("/");
    } catch (error) {
      if (error.response?.data?.errors) {
        const apiErrors = {};
        error.response.data.errors.forEach((err) => {
          apiErrors[err.param] = err.msg;
        });
        setErrors(apiErrors);
      } else {
        alert(error.response?.data?.msg || "Signup failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-mint-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="h-15"></div> {/* Empty space as requested */}
        <h1 className="text-3xl font-bold text-olive-500 mb-2">
          Create Account
        </h1>
        <p className="text-sage-600 mb-8">
          Join us to start your health journey
        </p>
        <div className="flex flex-col space-y-4 mb-6">
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <FcGoogle className="mr-3 text-xl" />
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <FaApple className="mr-3 text-xl" />
            <span>Continue with Apple</span>
          </button>
        </div>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-olive-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-olive-400`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-olive-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-olive-400`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-olive-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="bg-sage-50 p-4 rounded-lg">
            <p className="text-sm text-sage-700 font-medium mb-2">
              Password Requirements
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div
                className={`flex items-center ${
                  passwordValidations.length
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">• 8+ characters</span>
              </div>
              <div
                className={`flex items-center ${
                  passwordValidations.uppercase
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">• Uppercase letter</span>
              </div>
              <div
                className={`flex items-center ${
                  passwordValidations.lowercase
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">• Lowercase letter</span>
              </div>
              <div
                className={`flex items-center ${
                  passwordValidations.number
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">• Number</span>
              </div>
              <div
                className={`flex items-center ${
                  passwordValidations.specialChar
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">• Special character</span>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-olive-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-olive-400`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-olive-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-olive-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-olive-400`}
              placeholder="1234567890"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-olive-700 mb-1"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.dob ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-olive-400`}
            />
            {errors.dob && (
              <p className="mt-1 text-sm text-red-500">{errors.dob}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 bg-olive-400 hover:bg-olive-500 text-white font-semibold rounded-lg transition duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-olive-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
