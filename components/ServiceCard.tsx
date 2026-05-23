import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description: string;
};

export function ServiceCard({ href, title, description }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-accent hover:-translate-y-0.5 transition"
    >
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs text-slate-600 flex-1">{description}</p>
      <span className="mt-4 text-xs font-medium text-brand-accent group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
