import React, { useState, useEffect } from 'react';

const MafiaLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [smokeAnimation, setSmokeAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmokeAnimation(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(isLogin ? 'Login attempt' : 'Register attempt', formData);
    }, 2000);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gray-600 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Animated smoke effect */}
      <div className={`absolute inset-0 transition-opacity duration-3000 ${smokeAnimation ? 'opacity-10' : 'opacity-5'}`}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-4 shadow-2xl">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <span className="text-red-500 text-2xl font-bold">⚡</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
            RESURGENCE
          </h1>
          <p className="text-gray-300 text-lg font-medium">
            {isLogin ? 'Welcome Back, Boss' : 'Join the Family'}
          </p>
        </div>

        {/* Form container */}
        <div className="bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-red-500/30 shadow-2xl">
          <div onSubmit={handleSubmit} className="space-y-6">
            {/* Username field */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none"
                  placeholder="Enter your codename..."
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-500">👤</span>
                </div>
              </div>
            </div>

            {/* Email field (only for register) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none"
                    placeholder="your.email@underground.com"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-gray-500">📧</span>
                  </div>
                </div>
              </div>
            )}

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none pr-12"
                  placeholder="Enter your secret..."
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Confirm Password field (only for register) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 outline-none"
                    placeholder="Confirm your secret..."
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-gray-500">🔒</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
            >
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              )}
              <span className={isLoading ? 'invisible' : 'visible'}>
                {isLogin ? 'ENTER THE UNDERWORLD' : 'JOIN THE FAMILY'} 🔥
              </span>
            </button>

            {/* Forgot password (only for login) */}
            {isLogin && (
              <div className="text-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-red-400 text-sm transition-colors underline"
                >
                  Forgot your secrets?
                </button>
              </div>
            )}
          </div>

          {/* Switch between login/register */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="text-center">
              <span className="text-gray-400">
                {isLogin ? "New to the family? " : "Already part of the crew? "}
              </span>
              <button
                onClick={switchMode}
                className="text-red-400 hover:text-red-300 font-medium transition-colors underline"
              >
                {isLogin ? "Join Now" : "Sign In"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 Resurgence. All secrets protected.</p>
          <p className="mt-2 italic">"Trust is earned in drops and lost in buckets."</p>
        </div>
      </div>
    </div>
  );
};

export default MafiaLoginPage;
