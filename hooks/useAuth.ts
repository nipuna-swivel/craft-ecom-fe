"use client";

import { useAppSelector } from "@/hooks/index";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const redirect = () => {
    router.replace("/login");
  };

  return { isAuthenticated, redirect };
};

export default useAuth;
