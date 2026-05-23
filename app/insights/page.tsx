import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export default function InsightsPage() {
  const posts = [
    {
      slug: "sample-insight",
      title: "Sample insight title",
      description: "A placeholder article until Faith provides her content.",
      date: "2024-01-01",
    },
  ];

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="Insights"
            title="Legal insights and perspectives"
            subtitle="Articles and commentary on legal risk, compliance, and strategy."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-accent transition"
          >
            <h3 className="text-sm font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-2 text-xs text-slate-600">{post.description}</p>
            <p className="mt-3 text-[10px] text-slate-400">{post.date}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
