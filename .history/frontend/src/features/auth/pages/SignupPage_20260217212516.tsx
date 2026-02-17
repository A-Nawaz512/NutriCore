import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useRequestOtpMutation } from "../redux/Apis/authApi";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaTag,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    referral: "",
  });

//   const [requestOtp, { isLoading }] = useRequestOtpMutation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!acceptTerms) {
      alert("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    // try {
    //   const response = await requestOtp({
    //     name: form.fullName,
    //     email: form.email,
    //     phone: form.phone,
    //     password: form.password,
    //     legalAccepted: acceptTerms,
    //   }).unwrap();

    //   alert(response.message);
    //   navigate("/verify-otp", { state: { phone: form.phone } });
    // } catch (err) {
    // //   alert(err?.data?.message || "Something went wrong!");
    // }
  };

  const inputClass =
    "w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25492D] transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#25492D] text-center py-8 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Create Your Account
          </h2>
          <p className="text-gray-200 text-sm mt-2">
            Join NutriCore and start your wellness journey
          </p>
        </div>

        {/* FORM */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#25492D] mb-1">
                Full Name
              </label>
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#25492D] mb-1">
                Phone Number
              </label>
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter phone number"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#25492D] mb-1">
                Email Address
              </label>
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter email"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#25492D] mb-1">
                Password
              </label>
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter password"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#25492D] mb-1">
                Confirm Password
              </label>
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className={inputClass}
                placeholder="Re-enter password"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Referral */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#25492D] mb-1">
                Referral Code (Optional)
              </label>
              <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="referral"
                type="text"
                value={form.referral}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter referral code"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#25492D]"
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms-conditions" className="text-[#25492D] font-medium hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#25492D] font-medium hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
            //   disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#25492D] hover:bg-[#1f3b25] transition duration-300 shadow-md disabled:opacity-50"
            >
              {/* {isLoading ? "Sending OTP..." : "Sign Up"} */}
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#25492D] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
