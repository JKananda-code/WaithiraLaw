import { notFound } from "next/navigation";

const posts = {
  "sample-insight": {
    title: "Sample insight title",
    date: "2024-01-01",
    body: `
      This is placeholder content for an insight article.
      Faith will provide her own insights, commentary, and legal analysis.
    `,
  },
};

export default function InsightPage({ params }) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-sm text-slate-700">
      <h1 className="text-xl font-semibold text-slate-900">{post.title}</h1>
      <p className="mt-1 text-xs text-slate-500">{post.date}</p>
      <article className="mt-6 whitespace-pre-line">{post.body}</article>
    </section>
  );
}
