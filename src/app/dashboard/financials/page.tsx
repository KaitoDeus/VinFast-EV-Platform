import { redirect } from "next/navigation";

export default function FinancialsRootPage() {
  redirect("/dashboard/financials/payments");
}
