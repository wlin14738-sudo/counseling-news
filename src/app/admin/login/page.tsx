import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { getSession } from "@/lib/session";

export const metadata: Metadata = { title: "管理员登录" };

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session) {
    redirect("/admin");
  }

  return (
    <div className="container-page flex max-w-md flex-col items-center">
      <h1 className="mb-4 text-2xl font-bold text-slate-900">管理员登录</h1>
      <LoginForm />
    </div>
  );
}
