import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Crown } from 'lucide-react';

const LoginPage2 = () =>  {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    console.log('Login attempt:', formData);
    // Login logic here
  };

  const handleSocialLogin = (provider: any) => {
    console.log(`${provider} login attempt`);
    // Social login logic here
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setIsForgotPassword(false);
    setFormData({ username: '', password: '', email: '' });
  };

  const showForgotPassword = () => {
    setIsForgotPassword(true);
    setIsRegistering(false);
    setFormData({ username: '', password: '', email: '' });
  };

  const backToLogin = () => {
    setIsForgotPassword(false);
    setIsRegistering(false);
    setFormData({ username: '', password: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated fog/mist background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gray-700/15 rounded-full blur-3xl animate-pulse" style={{"animationDelay": "2s"}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/10 rounded-full blur-2xl animate-pulse" style={{"animationDelay": "4s"}}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo/Title Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full mb-6 shadow-2xl">
              <Crown className="w-10 h-10 text-yellow-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
              RESURGENCE
            </h1>
            <p className="text-gray-400 text-lg">
              {isForgotPassword ? "Reset Your Access" : isRegistering ? "Join the Family" : "Welcome Back, Boss"}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Login/Register/Forgot Form */}
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/50">
            <div className="space-y-6">
              {/* Forgot Password Form */}
              {isForgotPassword ? (
                <>
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-900/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                        placeholder="Enter your email to reset password"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500/30 cursor-pointer"
                  >
                    SEND RESET LINK
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={backToLogin}
                      className="text-sm text-gray-400 underline cursor-pointer"
                    >
                      ← Back to login
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Email Field (Register only) */}
                  {isRegistering && (
                    <div className="space-y-2">
                      <label className="text-gray-300 text-sm font-medium">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-900/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Username Field */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium">Username</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-gray-900/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-gray-300 text-sm font-medium">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-gray-900/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password (Login only) */}
                  {!isRegistering && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={showForgotPassword}
                        className="text-sm text-red-400 font-medium cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  {/* Login/Register Button */}
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500/30 cursor-pointer"
                  >
                    {isRegistering ? "JOIN THE FAMILY" : "ENTER THE UNDERWORLD"}
                  </button>

                  {/* Social Login Section */}
                  <div className="mt-8">
                    <div className="text-center mb-6">
                      <p className="text-gray-400 text-sm font-medium">
                        Continue with your account
                      </p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handleSocialLogin('Google')}
                        className="flex items-center justify-center py-3 px-4 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white font-medium transition-all duration-200 active:scale-95 focus:outline-none focus:border-gray-500 cursor-pointer"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSocialLogin('Apple')}
                        className="flex items-center justify-center py-3 px-4 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white font-medium transition-all duration-200 active:scale-95 focus:outline-none focus:border-gray-500 cursor-pointer"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        Apple
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Form Toggle */}
            {!isForgotPassword && (
              <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                  {isRegistering ? "Already part of the family?" : "New to the family?"}{' '}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-red-400 font-semibold underline transition-all duration-200 active:text-red-300 focus:outline-none cursor-pointer"
                  >
                    {isRegistering ? "Sign In" : "Join Now"}
                  </button>
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-8 space-y-4">
            <div className="px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700/30">
              <p className="text-gray-300 text-sm italic font-light">
                "Keep your friends close, but your enemies closer."
              </p>
              <p className="text-gray-500 text-xs mt-1">- The Art of War</p>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Resurgence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage2;
