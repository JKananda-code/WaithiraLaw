export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 space-y-3">
        <p>
          © {new Date().getFullYear()} Waithira Kamau Mwangi Advocate. All rights
          reserved.
        </p>
        <p className="max-w-3xl">
          This website provides general information and does not constitute
          legal advice. For advice on your specific situation, please book a
          consultation.
        </p>
      </div>
    </footer>
  );
}
