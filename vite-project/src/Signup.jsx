import React, { useState } from "react";
import { Sun, Moon, UserPlus } from "lucide-react";

const Signup = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-6 transition-all duration-500 ${isDark
                ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
                : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
                }`}
        >
            {/* Background Pattern */}
            <div
                className={`absolute inset-0 opacity-10 ${isDark ? "bg-gray-800" : "bg-gray-200"
                    }`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? "ffffff" : "000000"
                        }' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Signup Card */}
            <div
                className={`relative z-10 w-full max-w-md rounded-2xl shadow-lg p-8 transition-all duration-300 ${isDark
                    ? "bg-gray-900/90 text-white border border-gray-700"
                    : "bg-white/90 text-gray-900 border border-gray-200"
                    } backdrop-blur-md`}
            >
                {/* Theme Toggle */}
                <div className="flex justify-end">
                    <button
                        onClick={toggleTheme}
                        className={`p-3 rounded-full transition-all duration-300 ${isDark
                            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
                <p
                    className={`text-center mb-8 ${isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                >
                    Join Get Fit and start your fitness journey today
                </p>

                {/* Form */}
                <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label
                            className={`block mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className={`w-full p-3 rounded-lg outline-none border transition-all duration-300 ${isDark
                                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500"
                                }`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            className={`block mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={`w-full p-3 rounded-lg outline-none border transition-all duration-300 ${isDark
                                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500"
                                }`}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            className={`block mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className={`w-full p-3 rounded-lg outline-none border transition-all duration-300 ${isDark
                                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500"
                                }`}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            className={`block mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter password"
                            className={`w-full p-3 rounded-lg outline-none border transition-all duration-300 ${isDark
                                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                                : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500"
                                }`}
                        />
                    </div>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 ${isDark
                            ? "bg-orange-500 text-white hover:bg-orange-600"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                            }`}
                    >
                        <span>Sign Up</span>
                        <UserPlus size={20} />
                    </button>
                </form>

                {/* Already have account */}
                <p
                    className={`text-center mt-6 ${isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                >
                    Already have an account?{" "}
                    <a href="#login" className="text-orange-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;