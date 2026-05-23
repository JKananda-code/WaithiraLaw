import { SectionHeading } from "@/components/SectionHeading";

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <SectionHeading
            eyebrow="Industries"
            title="Sector-aware legal risk and compliance support"
            subtitle="Faith works with individuals, SMEs, startups, and organizations across diverse sectors."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2 text-sm text-slate-700">
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Regulated SMEs & corporates
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regulatory compliance frameworks</li>
            <li>Risk mapping and governance support</li>
            <li>Contractual risk mitigation</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Tech & digital businesses
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data protection and privacy compliance</li>
            <li>Platform and service agreement structuring</li>
            <li>Operational risk assessment</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Non-profits & social enterprises
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Governance and accountability frameworks</li>
            <li>Donor and partnership agreements</li>
            <li>Regulatory reporting support</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-semibold text-slate-900">
            Professional services & consultancies
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Client engagement agreements</li>
            <li>Operational compliance</li>
            <li>Risk-proofing internal processes</li>
          </ul>
        </div>
      </section>
    </>
  );
}
