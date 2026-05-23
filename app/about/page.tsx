import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="About"
            title="Waithira Kamau Mwangi Advocate"
            subtitle="Legal Risk & Compliance Consultant"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 space-y-10 text-sm text-slate-700">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Turning legal hurdles into strategic opportunities
          </h2>
          <p>
            Waithira Kamau Mwangi Advocate is a legal consultant with a passion for solving complex legal
            challenges and crafting innovative, customized solutions. Whether
            you are an individual seeking clarity, a niche business with unique
            needs, or an organization navigating risk and compliance, Waithira
            helps you transform legal complexity into clarity and confidence.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Law as the invisible thread
          </h2>
          <p>
            For Waithira, the law isn’t just a tool—it is the centerpiece of
            everything in life. Since law is the invisible thread that holds
            everything together, she excels in identifying the governing legal
            frameworks behind your situation and designing solutions that
            anticipate challenges before they arise.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            A practical, anticipatory approach
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Discover — Understand your context, sector, and risk profile.</li>
            <li>Diagnose — Identify governing law, obligations, and exposure.</li>
            <li>Design — Craft tailored frameworks, policies, and strategies.</li>
            <li>Deploy — Support implementation, training, and iteration.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Why clients choose Waithira
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strategic, anticipatory legal thinking</li>
            <li>Sector-aware and context-driven advice</li>
            <li>Clear, plain-language communication</li>
            <li>Long-term partnership mindset</li>
          </ul>
        </div>
      </section>
    </>
  );
}
