"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear authentication cookie
    document.cookie = "authenticated=; path=/; max-age=0";
    // Redirect to sign-in page
    router.push("/sign-in");
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-gray-500">Chiqilmoqda...</p>
    </div>
  );
};

export default LogoutPage;
