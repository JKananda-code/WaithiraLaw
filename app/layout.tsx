import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Waithira Kamau Mwangi Advocate | Legal Risk & Compliance Consultant",
  description:
    "Turning legal hurdles into strategic opportunities through tailored legal risk management and compliance solutions.",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
