import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminTopbar } from "@/components/admin/ui";

export const metadata: Metadata = {
  title: { default: "BDM Admin", template: "%s — BDM Admin" },
};

/* Coque du back-office : sidebar fixe + topbar + zone de travail. */

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-paper-2">
      <AdminSidebar />
      <div className="min-w-0 flex-1">
        <AdminTopbar />
        <main className="px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
