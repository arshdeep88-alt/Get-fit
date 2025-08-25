import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from './assets/logo.jpeg';

const Home = () => {
    const [isDark, setIsDark] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const theme = isDark ? 'dark' : 'light';

    return (
        <div className={`min-h-screen w-full transition-all duration-500 ${isDark
            ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
            }`}>

            {/* Background Pattern */}
            <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-gray-800' : 'bg-gray-200'
                }`} style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

            {/* Navigation */}
            <div className="pt-6 px-6">
                <nav
                    className={`relative z-50 px-6 py-4 rounded-2xl shadow-lg mx-auto transition-all duration-300 ${isDark
                        ? 'bg-gray-900/80 text-white'
                        : 'bg-white/80 text-gray-900'
                        } max-w-4xl backdrop-blur-md`}
                >

                    <div className="max-w-7xl mx-auto flex items-center justify-between">

                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <img
                                src={logo}
                                alt="Get Fit Logo"
                                className="w-12 h-12 rounded-2xl object-cover"
                            />
                            <span className="text-2xl font-bold">GET FIT</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="hover:text-orange-500 transition-colors font-medium">Home</a>
                            <a href="#programs" className="hover:text-orange-500 transition-colors font-medium">Programs</a>
                            <a href="#pricing" className="hover:text-orange-500 transition-colors font-medium">Pricing</a>
                            <a href="#contact" className="hover:text-orange-500 transition-colors font-medium">Contact</a>
                        </div>

                        {/* Theme Toggle & Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-3 rounded-full transition-all duration-300 ${isDark
                                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-3 rounded-full transition-colors hover:bg-gray-800"
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className={`md:hidden mt-6 p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="hover:text-orange-500 transition-colors font-medium">Home</a>
                                <a href="#programs" className="hover:text-orange-500 transition-colors font-medium">Programs</a>
                                <a href="#pricing" className="hover:text-orange-500 transition-colors font-medium">Pricing</a>
                                <a href="#contact" className="hover:text-orange-500 transition-colors font-medium">Contact</a>
                            </div>
                        </div>
                    )}
                </nav>
            </div>

            {/* Hero Section */}
            <div className="relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className={`text-6xl md:text-8xl font-black mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        GET FIT
                    </h1>

                    <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Build Your Body. Build Your Life.
                    </p>

                    {/* CTA Button */}
                    <button className={`px-12 py-4 text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${isDark
                        ? 'border-white text-white hover:bg-white hover:text-black'
                        : 'border-black text-black hover:bg-black hover:text-white'
                        }`}>
                        START YOUR JOURNEY
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Custom Diet Plans */}
                        <div className={`p-8 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                            ? 'bg-gray-800/50 border-gray-700 text-white'
                            : 'bg-white/80 border-gray-200 text-gray-900'
                            }`}>
                            <div className="w-12 h-12 mb-6 text-orange-500">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Custom Diet Plans</h3>
                            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                Create diet plans tailored to your goals.
                            </p>
                        </div>

                        {/* Macro Tracking */}
                        <div className={`p-8 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                            ? 'bg-gray-800/50 border-gray-700 text-white'
                            : 'bg-white/80 border-gray-200 text-gray-900'
                            }`}>
                            <div className="w-12 h-12 mb-6 text-orange-500">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Macro Tracking</h3>
                            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                Track calories, protein, carbs and fats.
                            </p>
                        </div>

                        {/* Fitness Goals */}
                        <div className={`p-8 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                            ? 'bg-gray-800/50 border-gray-700 text-white'
                            : 'bg-white/80 border-gray-200 text-gray-900'
                            }`}>
                            <div className="w-12 h-12 mb-6 text-orange-500">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Fitness Goals</h3>
                            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                Bulk, Cut, or Maintain with ease.
                            </p>
                        </div>

                        {/* Progress Tracker */}
                        <div className={`p-8 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                            ? 'bg-gray-800/50 border-gray-700 text-white'
                            : 'bg-white/80 border-gray-200 text-gray-900'
                            }`}>
                            <div className="w-12 h-12 mb-6 text-orange-500">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Progress Tracker</h3>
                            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                Monitor your fitness journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Your Health.
                        <br />
                        Your Rules.
                    </h2>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 opacity-10">
                <div className={`w-full h-full rounded-full border-8 ${isDark ? 'border-white' : 'border-black'
                    }`} />
            </div>
            <div className="absolute bottom-1/4 right-10 w-24 h-24 opacity-10">
                <div className={`w-full h-full ${isDark ? 'bg-white' : 'bg-black'
                    } transform rotate-45`} />
            </div>
        </div>
    );
};

export default Home;