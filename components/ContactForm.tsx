"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to backend / email service
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700">
            Name
          </label>
          <input
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700">
          Organization (optional)
        </label>
        <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent" />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700">
          Sector (optional)
        </label>
        <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent" />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700">
          Briefly describe your situation
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700">
          Preferred contact method / time (optional)
        </label>
        <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent" />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-900 transition"
      >
        Submit
      </button>

      {submitted && (
        <p className="text-xs text-emerald-600 mt-2">
          Thank you. Your message has been received. Faith will get back to you
          shortly.
        </p>
      )}
    </form>
  );
}
