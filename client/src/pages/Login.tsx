import LoginForm from "../components/auth/LoginForm";

/**
 * --------------------------------------------------------------------------
 * LOGIN PAGE
 * --------------------------------------------------------------------------
 * Responsibilities:
 * - Full-screen responsive layout
 * - Centered authentication card
 * - Page heading & description
 * - Render LoginForm
 *
 * No authentication logic here.
 * No API calls.
 * No navigation.
 * --------------------------------------------------------------------------
 */

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Authentication Card */}
        <section className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sign in to continue your AI Interview journey.
            </p>
          </header>

          {/* Login Form */}
          <LoginForm />
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AI Interview Pro. All rights reserved.
        </footer>
      </div>
    </main>
  );
}