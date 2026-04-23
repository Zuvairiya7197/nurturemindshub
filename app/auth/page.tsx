import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Login / Signup",
  description:
    "Login or create a parent account to track classes, progress, worksheets, and recordings.",
};

export default async function AuthPage() {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            title="Parent Login / Signup"
            subtitle="Access bookings, progress reports, worksheets, and class recordings from one dashboard."
          />
          <p className="text-sm leading-7 text-slate-600">
            Demo emails after seeding: `parent@example.com` and
            `admin@nurtureminds.com` (use any password in local demo mode).
          </p>
        </div>

        {/* <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">Login</h2>
              <LoginForm />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold text-slate-900">Signup</h2>
              <SignupForm />
            </CardContent>
          </Card>
        </div> */}
      </div>
    </main>
  );
}
