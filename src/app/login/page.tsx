import { Metadata } from "next";
import { Suspense } from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In | VinFast EV Platform",
  description: "Sign in to your VinFast EV Platform account.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="w-full h-80 rounded-3xl bg-[#1f1f1f] animate-pulse" />}>
        <SignInForm />
      </Suspense>
    </AuthLayout>
  );
}
