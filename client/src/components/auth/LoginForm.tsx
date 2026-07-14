import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  // Input States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // UI & Loading States
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Error States
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // DOM Refs for Keyboard Focus Management
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Email Regex Validator
  const validateEmailFormat = (emailStr: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  // Real-time Side-Effect Validation (Form Level Verification)
  useEffect(() => {
    if (!isSubmitted) return;

    // Email validation logic
    if (!email.trim()) {
      setEmailError('Email address is required.');
    } else if (!validateEmailFormat(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    // Password validation logic
    if (!password.trim()) {
      setPasswordError('Password is required.');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  }, [email, password, isSubmitted]);

  // Derived State for Submit Button Disabled State
  const isFormInvalid = 
    !email.trim() || 
    !validateEmailFormat(email) || 
    !password.trim() || 
    password.length < 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Initial explicit checks for focus redirection
    if (!email.trim() || !validateEmailFormat(email)) {
      setEmailError(!email.trim() ? 'Email address is required.' : 'Please enter a valid email address.');
      emailRef.current?.focus();
      return;
    }

    if (!password.trim() || password.length < 8) {
      setPasswordError(!password.trim() ? 'Password is required.' : 'Password must be at least 8 characters long.');
      passwordRef.current?.focus();
      return;
    }

    // If validations pass, trigger loading simulation
    setIsLoading(true);
    
    // Logic Integration Placeholder
    console.log('Form Submitted Successfully:', { email, password });
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
      
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Please sign in to your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        
        {/* Email Field Container */}
        <div className="space-y-1">
          <label 
            htmlFor="email-input" 
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            ref={emailRef}
            id="email-input"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            placeholder="you@example.com"
            aria-invalid={emailError ? 'true' : 'false'}
            aria-describedby={emailError ? 'email-error' : undefined}
            className={`w-full px-3 py-2.5 bg-transparent border rounded-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out text-sm
              ${emailError 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
              }`}
          />
          {/* Layout Shift Container (Min-height wrapper ensures consistent layout spacing) */}
          <div className="min-h-[20px] pt-1">
            {emailError && (
              <p id="email-error" role="alert" className="text-xs font-medium text-red-500 dark:text-red-400">
                {emailError}
              </p>
            )}
          </div>
        </div>

        {/* Password Field Container */}
        <div className="space-y-1">
          <label 
            htmlFor="password-input" 
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Password
          </label>
          <div className="relative">
            <input
              ref={passwordRef}
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="••••••••"
              aria-invalid={passwordError ? 'true' : 'false'}
              aria-describedby={passwordError ? 'password-error' : undefined}
              className={`w-full pl-3 pr-10 py-2.5 bg-transparent border rounded-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out text-sm
                ${passwordError 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-zinc-300 dark:border-zinc-700 focus:ring-blue-500'
                }`}
            />
            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md disabled:opacity-50 m-1"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Eye className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
          {/* Layout Shift Container */}
          <div className="min-h-[20px] pt-1">
            {passwordError && (
              <p id="password-error" role="alert" className="text-xs font-medium text-red-500 dark:text-red-400">
                {passwordError}
              </p>
            )}
          </div>
        </div>

        {/* Remember Me & Forgot Password Utilities */}
        <div className="flex items-center justify-between text-sm select-none pb-2">
          <label className="flex items-center space-x-2 cursor-pointer text-zinc-600 dark:text-zinc-400">
            <input
              type="checkbox"
              disabled={isLoading}
              className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-700 text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span>Remember me</span>
          </label>
          <a 
            href="#forgot-password" 
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus-visible:underline decoration-2"
          >
            Forgot password?
          </a>
        </div>

        {/* Primary Action Button */}
        <button
          type="submit"
          disabled={isLoading || (isSubmitted && isFormInvalid)}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
        >
          {isLoading ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Signing in...</span>
            </span>
          ) : (
            'Sign In'
          )}
        </button>

      </form>

      {/* Alternative CTA */}
      <div className="mt-6 text-center text-sm">
        <p className="text-zinc-600 dark:text-zinc-400">
          Don't have an account?{' '}
          <a
            href="#signup"
            className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus-visible:underline decoration-2"
          >
            Create one
          </a>
        </p>
      </div>

    </div>
  );
}