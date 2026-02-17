import { FC, useState } from "react"
import { User, Mail, Lock } from "lucide-react"
import Button from "../../../shared/components/ui/Button"
import Input from "../../../shared/components/ui/Input"
import { Link } from "react-router-dom"

const SignUpPage: FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Signup Data:", form)
    }

    return (
        <div className="min-h-screen flex">
            {/* LEFT BRAND SECTION */}
            <div className="hidden lg:flex w-[55%] text-white flex-col justify-center items-center p-0 relative">
                <div className="absolute inset-0  opacity-90" />

                {/* LEFT BRAND SECTION */}
                <div className="hidden lg:flex w-full h-full relative text-white overflow-hidden">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg')",
                        }}
                    />

                    {/* Dark Green Overlay */}
                    <div className="absolute inset-0 bg-[#25492D]/20" />

                    {/* Content */}
                    <div className="relative z-10 max-w-md px-16 py-20 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold mb-6 leading-tight">
                            Join NutriCore
                        </h1>

                        <p className="text-green-100 text-lg leading-relaxed">
                            Start your journey toward a healthier lifestyle with premium supplements
                            and personalized wellness solutions.
                        </p>

                        <div className="mt-10 space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur">
                                    ✔
                                </div>
                                <span className="text-white/90">
                                    Premium Quality Products
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur">
                                    ✔
                                </div>
                                <span className="text-white/90">
                                    Fast & Secure Checkout
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur">
                                    ✔
                                </div>
                                <span className="text-white/90">
                                    Expert Health Support
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* RIGHT FORM SECTION */}
            <div className="flex flex-1 justify-center items-center bg-gray-50 px-0 py-3">
                <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Create Account
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Sign up to get started
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className="pl-10"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="pl-10"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                className="pl-10"
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className="pl-10"
                                required
                            />
                        </div>

                        {/* Terms */}
                        <div className="flex items-center gap-3 text-sm">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={form.agree}
                                onChange={handleChange}
                                className="accent-[#25492D] w-4 h-4"
                                required
                            />
                            <span className="text-gray-600">
                                I agree to the{" "}
                                <span className="text-[#25492D] font-medium cursor-pointer hover:underline">
                                    Terms & Conditions
                                </span>
                            </span>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full bg-[#25492D] hover:bg-[#1b3421] transition-colors"
                        >
                            Create Account
                        </Button>
                    </form>

                    <p className="text-sm text-gray-500 mt-6 text-center">
                        Already have an account?{" "}
                       <Link> <span className="text-[#25492D] font-semibold cursor-pointer hover:underline">
                            Sign In
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
