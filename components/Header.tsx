"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center text-sm font-semibold">
            FW
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              Waithira Kamau Mwangi Advocate
            </span>
            <span className="text-xs text-slate-500">
              Legal Risk & Compliance Consultant
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 hover:text-brand-accent transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium rounded-full bg-brand text-white px-4 py-2 hover:bg-slate-900 transition"
          >
            Book a consultation
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium rounded-full bg-brand text-white px-4 py-2 text-center"
              onClick={() => setOpen(false)}
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
