type Props = {
  quote: string;
  name: string;
  role: string;
};

export function Testimonial({ quote, name, role }: Props) {
  return (
    <figure className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
      <blockquote className="italic">“{quote}”</blockquote>
      <figcaption className="mt-3 text-xs text-slate-500">
        {name} · {role}
      </figcaption>
    </figure>
  );
}
