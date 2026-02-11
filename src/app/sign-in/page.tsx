"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication logic
    // For now, set a simple authentication cookie
    document.cookie = "authenticated=true; path=/; max-age=86400"; // 24 hours
    // Redirect to home
    window.location.href = "/";
    router.push("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="Logotip" width={50} height={50} />
          <h1 className="text-2xl font-bold mt-4">Technova IT</h1>
          <p className="text-sm text-gray-500 mt-2">Maktab Boshqaruv Tizimi</p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">Kirish</h2>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email manzil
            </label>
            <input
              type="email"
              required
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="Email manzilingizni kiriting"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lamaSky focus:border-transparent outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parol
            </label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="Parolingizni kiriting"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lamaSky focus:border-transparent outline-none"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-lamaSky border-gray-300 rounded focus:ring-lamaSky"
              />
              <span className="ml-2 text-sm text-gray-600">Eslab qolish</span>
            </label>
            <button
              type="button"
              className="text-sm text-lamaSky hover:underline"
            >
              Parolni unutdingizmi?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-lamaSky text-gray-900 font-semibold py-3 rounded-md hover:bg-opacity-90 transition-all"
          >
            Kirish
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Technova IT. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
