type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wide text-brand-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
