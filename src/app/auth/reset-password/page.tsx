import { redirect } from "next/navigation";

export default function AuthResetPasswordRedirect() {
  redirect("/forgot-password");
}
